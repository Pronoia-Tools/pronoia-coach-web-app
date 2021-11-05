<template>
  <!-- CHANGE PASSWORD -->
  <div class="w-full flex flex-col px-10 text-gray-500">
    <h2 class=" text-lgText">Change password</h2>
    <Form
        class="flex flex-col items-center gap-2"
        @submit="submitSignUp"
        :initial-values="formValues"
    >
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
      
      <!-- <router-link class=" text-myPurple underline cursor-pointer" :to="{name:'Settings'}">Settings</router-link> -->
        
      <ButtonCustomVue class="p-2 bg-purple-900 text-white" >{{$t("sign-up.submit")}}</ButtonCustomVue>
      
    </Form>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import Swall from "sweetalert2";
import {Toast} from "@/components/Toast.js"
import ButtonCustomVue from "@/components/ButoomCustom.vue"
import { mapGetters,mapActions } from 'vuex';

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    ButtonCustomVue
  },
  computed: {
    ...mapGetters("auth", ["getUserAuth"]),
  },
  methods:{
    ...mapActions("auth",["updatePassword"]),
    async submitSignUp(data){
      let revisedData = {
        email:this.getUserAuth.user.email,
        currentPassword: data.currentPassword,
        newPassword: data.passwordConfirm,
      };
      try {
        const res = await this.updatePassword(revisedData);
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
  }
}
</script>

<style>

</style>