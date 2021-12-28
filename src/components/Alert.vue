<template>
    <font-awesome-icon :icon="myBell" @click="toogleOpen" class="cursor-pointer"/>
    <div class=" bg-yellow-300 bg-opacity-80 w-full md:w-48 relative md:absolute top-6 p-3" v-show="isOpen">
      <div class="w-full h-24 mb-3">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/X1qt8lUMO2g" frameborder="0" allowfullscreen></iframe>
      </div>
      <ul class="">
        <router-link :to="{name:'login'}" class="border-b border-myPurple text-myPurple mb-2 pb-1 block md:inline-block hover:text-white hover:border-white ">{{$t("navbar.alert.faq")}}</router-link>
        <router-link :to="{name:'login'}" class="border-b border-myPurple text-myPurple mb-2 pb-1 block md:inline-block hover:text-white hover:border-white ">{{$t("navbar.alert.creationStation")}}</router-link>
        <router-link :to="{name:'login'}" class="border-b border-myPurple text-myPurple mb-2 pb-1 block md:inline-block hover:text-white hover:border-white ">{{$t("navbar.alert.knowladgeLibrary")}}</router-link>
      </ul>
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBell } from '@fortawesome/free-solid-svg-icons'

export default {
  components:{
    FontAwesomeIcon
  },
  data(){
    return{
      myBell:faBell,
      isOpen:false
    }
  },
  methods:{
    toogleOpen(){
      this.isOpen = !this.isOpen
    }
  }
}
</script>

<style>

</style>