<template class="container mx-auto">
  <div class="container mx-auto">
    <!-- Tabs Titles -->

    <!-- Icon -->
    <div class="flex justify-center mx-auto my-10 w-10/12 md:w-6/12 lg:w-4/12 py-10">
      <img src="@/assets/WorkbookFactoryLogo.png" id="icon" alt="User Icon" />
    </div>

    <!-- Login Form -->
    <Form @submit="submitLogin" class=" text-center  container mx-auto">
      <div class="my-4">
        <p class="text-gray-600">{{$t("login.email")}}</p>
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
        <p class="text-gray-600">{{$t("login.password")}}</p>
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
          :value="$t('login.log-in')"
        />
      </div>
    </Form>

    <!-- Remind Passowrd -->
    <div class="flex flex-col justify-center items-center text-center my-5">
      <router-link class="text-blue-800 underline my-2" to="/signup"
        >{{$t("login.register")}}</router-link
      >
      <router-link class="text-blue-800 underline my-2" to="/restore"
        >{{$t("login.forgot-password")}}</router-link
      >
      <!-- <ButoomCustomVue class="bg-myOrange" @click="toogleShowModalPayment">{{$t("input.joinWhitelist")}}</ButoomCustomVue> -->
    </div>
  </div>
  <PaymentModalVue :showModal="showModalPayment" @toogleShowModal="toogleShowModalPayment"></PaymentModalVue>
</template>

<script>
// @ is an alias to /src
import { Form, Field, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from 'vuex';
import Swall from "sweetalert2";
import PaymentModalVue from '../../../components/PaymentModal.vue';
// import ButoomCustomVue from '../../../components/ButoomCustom.vue';

export default {
  name: "Login",
  components: { Form, Field, ErrorMessage, 
  PaymentModalVue, 
  // ButoomCustomVue 
  },
  data() {
    return { usuario: "", password: "", showModalPayment:false };
  },
  computed: {
    ...mapState("auth", ["isAuthenticated"]),
  },
  methods: {
    ...mapActions("auth", ["login"]),
    toogleShowModalPayment(){
      this.showModalPayment =!this.showModalPayment
    },
    async submitLogin(values) {
      // console.log(values);
      // e.preventDefault();
      // if (!e.signDashboard) {
      //   e.signDashboard = false;
      // }
      let jsonUserData = { email: values.email, password: values.password };
      try {
        await this.login(jsonUserData);
        if (this.isAuthenticated) {
          // localStorage.setItem("user",JSON.stringify(response));
          this.$router.push({name:"no-workbook"});
        }  
      } catch (error) {
        Swall.fire({
          icon:"error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text:error.response.data.message
        })
      }
      // if (loged === 400) Swal.fire("This email is not registered", "", "error");
      // if (loged === 401) Swal.fire("Incorrect password", "", "error");
      // if (loged === 500) {
      //   Swal.fire({
      //     title: "Ups... Something went wrong!!",
      //     text: "Try again",
      //     icon: "error",
      //   });
      // }
    },
  },
  created() {
    if (this.isAuthenticated) {
      this.$router.push({name:"no-workbook"});
    }
  }
};
</script>
