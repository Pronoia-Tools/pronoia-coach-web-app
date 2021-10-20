<template>
  <div class="w-full flex flex-col items-center">
    <div class="w-10/12 md:w-6/12 lg:w-4/12 py-10">
      <img src="@/assets/WorkbookFactoryLogo.png" alt="logo" />

      <Form
        class="text-gray-500 px-10 flex flex-col items-center gap-2"
        @submit="submitRestore"
      >
        <div class="field">
          <label class="block" for="email">{{$t("restorePassword.emailText")}}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="email"
            name="email"
            rules="required|email"
          />
          <ErrorMessage class="text-red-400" name="email"></ErrorMessage>
        </div>
        <ButoomCustomVue>{{$t("input.send")}}</ButoomCustomVue>
      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import PronoiaAPI from '../../../api/PronoiaAPI'
import Swal from "sweetalert2";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    ButoomCustomVue
  },
  methods:{
    async submitRestore(data){
      let revisedData = {
        email: data.email,
      };
      console.log(revisedData)
      try {
        const {data} = await PronoiaAPI.post("/auth/restore",revisedData);
        console.log(data)
        Swal.fire({
          icon:"success",
          title: `${this.$t("swallAlertGeneral.succces")}`,
          text: `${this.$t("restorePassword.emailSent")}`
        })
        
        this.$router.push({name:"login"});
        
      } catch (error) {
        Swal.fire({
          icon:"error",
          title:`${this.$t("swallAlertGeneral.error")}`,
          text:error.response.data.message
        })
      }
    },
  }
}
</script>

<style>

</style>