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
            <label class="block" for="fistName">First Name</label>
            <Field
              class="w-full px-2 py-1 border rounded border-gray-400"
              type="text"
              name="firstName"
              rules="required"
            />
            <ErrorMessage class="text-red-400" name="firstName"></ErrorMessage>
          </div>

          <div class="field">
            <label class="block" for="LastName">Last Name</label>
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
          <label class="block" for="email">Email</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            type="email"
            name="email"
            rules="required|email"
          />
          <ErrorMessage class="text-red-400" name="email"></ErrorMessage>
        </div>

        <div class="field w-full">
          <label class="block" for="password">Password</label>
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
            >Password Confirmation</label
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
          <label class="block" for="country">Country</label>
          <Field
            class="w-full px-2 py-1 border rounded border-gray-400"
            name="country"
            rules="required"
            as="select"
          >
            <option value="" disabled>Select</option>
            <option value="Mx">México</option>
            <option value="USA">Estados unidos</option>
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
            >Sign me up as a coach and give me access to the Coach's
            Dashboard</label
          >
        </div>
        <div>
          <button class="p-2 bg-purple-900 text-white" >Submit</button>
        </div>

        <a href="/login" class="underline text-purple-900">I already have an account</a>

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
          title:"Ups... Something went wrong!!",
          text:"Try again",
          icon:"error"
        });
      }
    }
  }
