<template>
  <div class="w-full flex flex-col px-10 text-gray-500">
    <h2 class=" text-lgText">My profile</h2>
    <div class="w-full py-2">
      <Form
        class="flex flex-col items-center gap-2"
        @submit="submitSignUp"
        :initial-values="formValues"
      >
        <div class=" grid grid-cols-2 gap-4 w-full">
          <div class="field">
            <label class="block" for="fistName">{{$t("settings.profile.first-name")}}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="firstName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="firstName"></ErrorMessage>
          </div>

          <div class="field">
            <label class="block" for="LastName">{{$t("settings.profile.last-name")}}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="lastName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="lastName"></ErrorMessage>
          </div>
        </div>

        <div class="field w-full">
          <label class="block" for="email">{{$t("settings.profile.email")}}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="email"
            name="email"
            rules="required|email"
          />
          <ErrorMessage class="text-red-400" name="email"></ErrorMessage>
        </div>

        
        <div class="field w-full">
          <label class="block" for="country">{{$t("settings.profile.country")}} <span class=" text-gray-300" v-if="userData">({{$t("settings.profile.yourCountry")}} {{userData.user.country}})</span></label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="country"
            as="select"
          >
            <option value="" selected>{{$t("input.select")}}</option>
            <option v-for="country in countryList" 
            :key="country.countryCode" 
            :value="country.name"
            :selected="value && value.includes(country.name)">
            {{country.name}}
            </option>
            <!-- <option value="Mexico">{{$t("countries.mexico")}}</option>
            <option value="USA">{{$t("countries.usa")}}</option> -->
          </Field>
          <ErrorMessage class="text-red-400" name="country"></ErrorMessage>
        </div>

        <div class="field w-full">
            <label class="block" for="businessname">{{$t("settings.profile.businessname")}}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="businessname"
            />
          </div>

        <!-- <router-link class=" text-myPurple underline cursor-pointer" :to="{name:'Security'}">Change password</router-link> -->
        
        <ButtonCustomVue class="p-2 bg-purple-900 text-white" >{{$t("input.save")}}</ButtonCustomVue>
      

      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import { mapGetters,mapActions } from 'vuex';
import Swall from "sweetalert2";
import countries from "@/assets/countryList.json"
import {Toast} from "@/components/Toast.js"
import ButtonCustomVue from "@/components/ButoomCustom.vue"
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    ButtonCustomVue
  },
  data(){
    return{
      countryList:countries,
      formValues:null,
      userData:null,
      // showPasswordsForm:false
    }
  },
  computed: {
    ...mapGetters("auth", ["getUserAuth"]),
  },
  methods:{
    async loadUserData(){
      this.userData = await this.getUserAuth
      const formValues = {
        firstName:this.userData.user.firstName,
        lastName:this.userData.user.lastName,
        email:this.userData.user.email,
        country:this.userData.user.country,
        businessname:this.userData.user.businessname
      };
      this.formValues = formValues
    },
    toogleShowPasswordsForm(){
      this.showPasswordsForm = !this.showPasswordsForm
    },
    ...mapActions("auth",["updateUser"]),
    
    async submitSignUp(data){
      let revisedData = {
        firstname: data.firstName,
        lastname: data.lastName,
        currentEmail:this.userData.user.email,
        newEmail: data.email,
        country: data.country,
        businessname: data.businessname
        // currentPassword: data.currentPassword,
        // newPassword: data.passwordConfirm,
      };
      try {
        // console.log(revisedData)
        const res = await this.updateUser(revisedData);
        if (res) {
          Toast.fire({
            text:this.$t("swallAlertGeneral.updated"),
            icon:"success"
          });
        }
      } catch (error) {
        Swall.fire({
          icon:"error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text:error.response.data.message
        })
      }
    },
  },
  mounted(){
    this.loadUserData()
  }
}
</script>

<style scoped>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>