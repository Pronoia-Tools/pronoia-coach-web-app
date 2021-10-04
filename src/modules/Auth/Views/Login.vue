<template class="container mx-auto">
  <div class="container mx-auto">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="flex justify-center mx-10 my-10">
      <img src="@/assets/logoWF.png" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <Form @submit="submitLogin" class=" text-center  container mx-auto">
      <div class="my-4">
        <p class="text-gray-600">Email</p>
        <Field
          type="email"
          id="login"
          class=" border border-gray-300 py-2"
          v-model="usuario"
          name="email"
          rules="required"
        />
        <br />
        <ErrorMessage class="text-red-400" name="email"></ErrorMessage>
      </div>
      <div class="my-4">
        <p class="text-gray-600">Password</p>
        <Field
          type="password"
          class=" border border-gray-300 py-2"
          name="password"
          rules="required"
        />
        <br />
        <ErrorMessage class="text-red-400" name="password"></ErrorMessage>
      </div>
      <div className="flex justify-center my-10">
        <input
          type="submit"
          class="bg-blue-800 p-3 text-white cursor-pointer"
          value="Log In"
        />
      </div>
    </Form>

    <!-- Remind Passowrd -->
    <div class="flex flex-col text-center">
      <router-link class="text-blue-800 underline my-2" to="/register"
        >Register</router-link
      >
      <router-link class="text-blue-800 underline my-2" to="/forgot-password"
        >Forgot your Password?</router-link
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from 'vuex';
import Swall from "sweetalert2";

export default {
  name: "Login",
  components: { Form, Field, ErrorMessage },
  data() {
    return { usuario: "", password: "" };
  },
  computed: {
    ...mapState("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    async submitLogin(values) {
      console.log(values);
      // e.preventDefault();
      // if (!e.signDashboard) {
      //   e.signDashboard = false;
      // }
      let jsonUserData = { email: values.email, password: values.password };
      await this.login(jsonUserData);
      if (this.isAuthenticated) {
        // localStorage.setItem("user",JSON.stringify(response));
        this.$router.push({name:"WorkBookLayout"});
      }else{
        Swall.fire({
          title:"Ups... Something went wrong!!",
          text:"Try again",
          icon:"error"
        });
      }
      if (loged === 400) Swal.fire("This email is not registered", "", "error");
      if (loged === 401) Swal.fire("Incorrect password", "", "error");
      if (loged === 500) {
        Swal.fire({
          title: "Ups... Something went wrong!!",
          text: "Try again",
          icon: "error",
        });
      }
    },
  },
};
</script>
