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

export default {
  name: "MyComponent",
  components: {
    NavbarVue,
    FeedbackButton,
  },
  computed:{
    ...mapActions("auth",["loadSession"])
  },
  created() {
    this.loadSession;
  }
};
</script>
<style>

</style>
