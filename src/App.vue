<template>
  <div class="flex flex-col h-screen ">
    <NavbarVue />
    <router-view class=" flex-grow" />
    <FeedbackButton />
  </div>
</template>

<script>
import NavbarVue from "./components/Navbar.vue";
import FeedbackButton from "./modules/FeedbackButton/Views/FeedbackButton.vue";
import { mapActions } from 'vuex'
import Swall from "sweetalert2"
export default {
  name: "MyComponent",
  components: {
    NavbarVue,
    FeedbackButton,
  },
  computed:{
    ...mapActions("auth",["loadSession","cleanLocalStorage"])
  },
  async created() {
    try {
        
      await this.loadSession;
    } catch (error) {
      Swall.fire({
        icon:"error",
        text:error.response.data.message
      })
      this.cleanLocalStorage()
    }
  }
};
</script>
<style>

</style>
