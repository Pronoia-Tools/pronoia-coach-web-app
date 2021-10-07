<template>
  <div class="flex">
    <!-- SIDEBAR -->
    <div class="w-52 border-r border-b border-black flex-shrink-0">
      <Sidebar :idWorkBook="idWorkBook"></Sidebar>
    </div>
    <div class="flex-grow relative h-screen">    
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Sidebar from '../Components/Sidebar.vue';
export default {
  components: { Sidebar },
  props: {
    idWorkBook: {
      type: String,
      requird: true,
    },
  },
  data(){
    return{
      sectionSelected:0
    }
  }
  
}
</script>

<style>

</style>