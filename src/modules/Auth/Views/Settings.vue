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
            <label class="block" for="fistName">{{$t("sign-up.first-name")}}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="firstName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="firstName"></ErrorMessage>
          </div>

          <div class="field">
            <label class="block" for="LastName">{{$t("sign-up.last-name")}}</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="LastName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="LastName"></ErrorMessage>
          </div>
        </div>

        <div class="field w-full">
          <label class="block" for="email">{{$t("sign-up.email")}}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="email"
            name="email"
            rules="required|email"
          />
          <ErrorMessage class="text-red-400" name="email"></ErrorMessage>
        </div>

        
        <div class="field w-full">
          <label class="block" for="country">{{$t("sign-up.country")}} <span class=" text-gray-300" v-if="userData">(Your current country is {{userData.user.country}})</span></label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="country"
            rules="required"
            as="select"
          >
            <option value="" disabled selected>{{$t("input.select")}}</option>
            <option v-for="country in countryList" 
            :key="country.countryCode" 
            :value="country.name">
            {{country.name}}
            </option>
            <!-- <option value="Mexico">{{$t("countries.mexico")}}</option>
            <option value="USA">{{$t("countries.usa")}}</option> -->
          </Field>
          <ErrorMessage class="text-red-400" name="country"></ErrorMessage>
        </div>



        <span class=" text-myPurple underline cursor-pointer" @click="toogleShowPasswordsForm">Change password</span>
        <!-- CHANGE PASSWORD -->
        <transition name="fade">

          <div class="w-full" v-if="showPasswordsForm">
            <h2 class=" text-lgText">Change password</h2>
            <!-- CURRENT PASSWORD -->
            <div class="field w-full">
              <label class="block" for="password">{{$t("sign-up.password")}}</label>
              <Field
                class="w-full px-2 py-1 border rounded border-gray-400"
                type="password"
                name="currentPassword"
                rules="required"
              />
              <ErrorMessage class="text-red-400" name="password"></ErrorMessage>
            </div>
            <!-- NEW PASSWORD -->
            <div class="field w-full">
              <label class="block" for="password">{{$t("sign-up.password")}}</label>
              <Field
                class="w-full px-2 py-1 border rounded border-gray-400"
                type="password"
                name="password"
                rules="required"
              />
              <ErrorMessage class="text-red-400" name="password"></ErrorMessage>
            </div>
            <!-- CONFIRM PASSWORD -->
            <div class="field w-full">
              <label class="block" for="passwordConfirm"
                >{{$t("sign-up.password-confirmation")}}</label
              >
              <Field
                class="w-full px-2 py-1 border rounded border-gray-400"
                type="password"
                name="passwordConfirm"
                rules="required|confirmed:password"
              />
              <ErrorMessage
                class="text-red-400"
                name="passwordConfirm"
              ></ErrorMessage>
            </div>
          </div>
        </transition>


        <div>
          <button class="p-2 bg-purple-900 text-white" >{{$t("sign-up.submit")}}</button>
        </div>

      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import { mapGetters } from 'vuex';
// import Swall from "sweetalert2";
import countries from "@/assets/countryList.json"
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data(){
    return{
      countryList:countries,
      formValues:null,
      userData:null,
      showPasswordsForm:false
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
        LastName:this.userData.user.lastName,
        email:this.userData.user.email,
      };
      this.formValues = formValues
    },
    toogleShowPasswordsForm(){
      this.showPasswordsForm = !this.showPasswordsForm
    },
    // ...mapActions("auth",["signUp"]),
    
    async submitSignUp(data){
      let revisedData = {
        firstname: data.firstName,
        lastname: data.LastName,
        email: data.email,
        country: data.country,

        currentPassword: data.password,
        password: data.password,
        passwordConfirm: data.password,
      };
      console.log(revisedData)
    },
  },
  mounted(){
    this.loadUserData()
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>