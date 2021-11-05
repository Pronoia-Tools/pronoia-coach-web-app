<template>
  <div class="flex">
    <!-- SIDEBAR -->
    <div class="border-r border-b border-black transition-all duration-1000 flex-shrink-0 flex-col" :class="isSidebarOpen">
      <div class="flex flex-col px-5 py-1 gap-2">
        <router-link to="/settings/profile">{{$t("settings.settingsLayout.profile")}}</router-link>
        <router-link to="/settings/security">{{$t("settings.settingsLayout.security")}}</router-link>
      </div>
    </div>
    <div class="flex-grow relative">    
      <FontAwesomeIcon v-if="!sidebarOpen" :icon="myChevronRight" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple rounded-r z-50" @click="toogleSidebarOpen"/>
      <FontAwesomeIcon v-else :icon="myChevronLeft" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple z-50" @click="toogleSidebarOpen"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export default {
  components:{
    FontAwesomeIcon,
  },
  data(){
    return{
      myChevronRight:faChevronRight,
      myChevronLeft:faChevronLeft,

      sidebarOpen:false
    }
  },
  methods:{
    toogleSidebarOpen(){
      this.sidebarOpen = !this.sidebarOpen
    },
  },
  computed:{
    isSidebarOpen(){
      return this.sidebarOpen?"text-white invisible w-1":" w-64 visible"
    }
  },
};
</script>

<style>
</style>