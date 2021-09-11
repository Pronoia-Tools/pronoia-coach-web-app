<template class="container mx-auto">
  <div class="container mx-auto">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="flex justify-center">
      <img src="@/assets/logoWF.png" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <form class=" text-center  container mx-auto" v-on:submit.prevent="login">
      <div class="my-4">
        <p class="text-gray-600">Email</p>
        <input
          type="text"
          id="login"
          class=" border border-gray-300 py-2"
          name="login"
          v-model="usuario"
        />
      </div>
      <div class="my-4">
        <p class="text-gray-600">Password</p>
        <input
          type="text"
          id="password"
          class=" border border-gray-300 py-2"
          name="login"
          v-model="password"
        />
      </div>
      <div className="flex justify-center my-10">
        <input
          type="submit"
          class="bg-blue-800 p-3 text-white"
          value="Log In"
        />
      </div>
    </form>

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

export default {
  name: "Login",
  components: {},
  data() {
    return { usuario: "", password: "" };
  },
  methods: {
    login() {
      let json = { usuario: this.usuario, password: this.password };
      console.log(this.usuario);
      axios.post("http://solodata.es/auth", json).then((data) => {
        console.log(data);
      });
    },
  },
};
</script>
