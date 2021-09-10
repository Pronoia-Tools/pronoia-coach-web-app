<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex justify-between items-center border border-black py-2 px-4 relative">
      <div>
        <img src="logo.png" alt="logo">
      </div>
      <nav class="flex gap-4">
        <router-link to="/">Your Library</router-link>
        <router-link to="/workbook">Workbook Factory</router-link>
        <router-link to="/">Coach's Dashboard</router-link>
        <router-link to="/">Marketplace</router-link>
      </nav>
      <div class="flex gap-5">
        <font-awesome-icon :icon="myQuestionCircle" />
        <font-awesome-icon :icon="myIcon" />
        <font-awesome-icon :icon="myBell" />
        <span>Victor Manuel</span>
        <div class="cursor-pointer" @click="changeOpenUserMenu">
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
    <router-view class=" flex-grow bg-red-500"/>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBookOpen,faQuestionCircle,faBell,faUser,faAngleDown } from '@fortawesome/free-solid-svg-icons'

export default {
  name: 'MyComponent',

  data () {
    return {
      myIcon: faBookOpen,
      myQuestionCircle: faQuestionCircle,
      myBell: faBell,
      myUser: faUser,
      myArrowDown: faAngleDown,


      openUserMenu:false
    }
  },

  components: {
    FontAwesomeIcon
  },
  methods:{
    changeOpenUserMenu(){
      this.openUserMenu = !this.openUserMenu
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

</style>
