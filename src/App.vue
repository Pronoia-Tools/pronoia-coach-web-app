<template>
  <div class="flex flex-col min-h-screen">
    <NavbarVue />
    <router-view class=" flex-grow" />
  </div>
</template>

<script>
import NavbarVue from "./components/Navbar.vue";

export default {
  name: "MyComponent",
  components: {
    NavbarVue,
  },
};
</script>
<style>

</style>
