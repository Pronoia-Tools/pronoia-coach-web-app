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
import axios from "axios";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
  name: "Login",
  components: { Form, Field, ErrorMessage },
  data() {
    return { usuario: "", password: "" };
  },
  methods: {
    submitLogin(e, values) {
      console.log(e, values);
      // e.preventDefault();
      if (!e.signDashboard) {
        e.signDashboard = false;
      }
      let json = { usuario: this.usuario, password: this.password };
      console.log(this.usuario);
      axios.post("http://solodata.es/auth", json).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
