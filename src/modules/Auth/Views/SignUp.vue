<template>
  <div class="w-full flex flex-col items-center">
    <div class=" w-10/12 md:w-6/12 lg:w-4/12 py-10">
      <img src="img/Sammy_Logo.png" alt="logo" />

      <Form
        class="text-gray-500 px-10 flex flex-col items-center gap-2"
        @submit="submitSignUp"
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
          <label class="block" for="password">{{$t("sign-up.password")}}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="password"
            name="password"
            rules="required"
          />
          <ErrorMessage class="text-red-400" name="password"></ErrorMessage>
        </div>

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

        <div class="field w-full">
          <label class="block" for="country">{{$t("sign-up.country")}}</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="country"
            rules="required"
            as="select"
          >
            <option value="" disabled>{{$t("input.select")}}</option>
            <option :value="$t('languages.mexico')">{{$t("countries.mexico")}}</option>
            <option :value="$t('languages.usa')">{{$t("countries.usa")}}</option>
          </Field>
          <ErrorMessage class="text-red-400" name="country"></ErrorMessage>
        </div>

        <div class="flex justify-center items-center gap-3 my-4">
          <Field
            type="checkbox"
            name="signDashboard"
            class="block"
            :value="true"
          />
          <label class="block text-blue-500" for="cbox2"
            >{{$t("sign-up.checkBox")}}</label
          >
        </div>
        <div>
          <button class="p-2 bg-purple-900 text-white" >{{$t("sign-up.submit")}}</button>
        </div>

        <router-link to="/login" class="underline text-purple-900">{{$t("sign-up.already-have-acount")}}</router-link>

      </Form>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate"
import { mapActions, mapState } from 'vuex';
import Swall from "sweetalert2";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  computed: {
    ...mapState("auth", ["isAuthenticated"]),
  },
  methods:{
    ...mapActions("auth",["signUp"]),
    
    async submitSignUp(data){
      let revisedData = {
        firstname: data.firstName,
        lastname: data.LastName,
        email: data.email,
        password: data.password,
        country: data.country 
      };
      await this.signUp(revisedData);
      if (this.isAuthenticated) {
        this.$router.push({name:"WorkBookLayout"});
      } else {
        Swall.fire({
          title:this.$t("swallAlertGeneral.error"),
          text:this.$t("swallAlertGeneral.try-again"),
          icon:"error"
        });
      }
    },
  }
}
</script>