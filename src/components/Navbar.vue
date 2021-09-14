<template>
  <div class="flex justify-between items-center border border-black py-2 px-4 relative z-50">
    <div>
      <img src="logo.png" alt="logo">
    </div>

    <!-- LINKS -->
    <div class="flex flex-col flex-grow justify-start items-center md:justify-around absolute top-0 w-1/2 h-screen transition-all duration-500 bg-black bg-opacity-75 text-white
                md:relative md:h-auto md:w-auto md:flex-row  md:left-0 md:bg-white md:bg-opacity-0 md:text-black"
        :class="isOpen"
    >
      <font-awesome-icon :icon="myTimes" class=" self-end m-5 text-xl md:hidden" @click="toggleOpenMovileMenu"/>
      <nav class="flex gap-4 flex-col text-center m-4
                   md:flex-row md:m-1">
        <router-link to="/">Your Library</router-link>
        <router-link to="/workbook">Workbook Factory</router-link>
        <router-link to="/">Coach's Dashboard</router-link>
        <router-link to="/">Marketplace</router-link>
      </nav>
      <div class="flex gap-5 flex-col
                   md:flex-row">
        <font-awesome-icon :icon="myQuestionCircle" />
        <font-awesome-icon :icon="myIcon" />
        <font-awesome-icon :icon="myBell" />
      </div>
    </div>
    <!-- USER -->
    <div class="flex gap-2 items-center">
      <font-awesome-icon :icon="myBars" @click="toggleOpenMovileMenu" class="cursor-pointer md:hidden"/>
      <span>Victor Manuel</span>
      <div class="cursor-pointer" @click="toggleOpenUserMenu">
        <font-awesome-icon :icon="myUser" />
        <font-awesome-icon :icon="myArrowDown"/>

        <transition name="slide-fade">
          <div v-show="openUserMenu" class="absolute top-10 -right-0 py-2 w-40 border-black border flex flex-col divide-y divide-black">
            <router-link to="/">Settings</router-link>
            <router-link to="/">Log out</router-link>
          </div>
        </transition>

      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpen,faQuestionCircle,faBell,faUser,faAngleDown,faBars,faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'Navbar',

  data () {
    return {
      myIcon: faBookOpen,
      myQuestionCircle: faQuestionCircle,
      myBell: faBell,
      myUser: faUser,
      myArrowDown: faAngleDown,
      myBars:faBars,
      myTimes:faTimes,


      openUserMenu:false,
      openMovilMenu:true
    }
  },

  components: {
    FontAwesomeIcon,
  },
  methods:{
    toggleOpenUserMenu(){
      this.openUserMenu = !this.openUserMenu
    },
    toggleOpenMovileMenu(){
      this.openMovilMenu = !this.openMovilMenu
    }
  },
  computed:{
    isOpen(){
      return this.openMovilMenu?"left-0":"-left-full"
    }
  }

}
</script>

<style>
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.router-link-active{
  color:deepskyblue;
}
</style>