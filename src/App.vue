<template>
  <div class="flex flex-col min-h-screen">
    <NavbarVue/>
    <router-view class=" flex-grow"/>
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue'

export default {
  name: 'MyComponent',
  components:{
    NavbarVue
  }
}

</script>
<style>


h1{
  font-size: 3rem;
  font-weight: bold !important;
}
h2{
  font-size: 2rem !important;
  font-weight: bold !important;
}
h3{
  font-size: 1rem;
}

</style>
