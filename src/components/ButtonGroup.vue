<template>
  <div class="relative" @blur="toogleOpen" tabindex="0" ref="dropdown">
    <!-- <FontAwesomeIcon :icon="myEllipsisH" @click="toogleOpen" class="cursor-pointer rounded-full hover:bg-myPurple text-3xl px-2 transition"></FontAwesomeIcon> -->
    
    <svg 
      @click="toogleOpen" 
      class="cursor-pointer rounded-full hover:bg-myPurple transition block p-1 w-10 h-10" 
      focusable="false" 
      viewBox="0 0 24 24">
        <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
    </svg>
    <transition name="slide-fade" class="rounded shadow-xl" >
      <div v-show="isOpen" class="absolute top-10 -right-0 py-2 w-56 border-black border flex flex-col divide-y divide-black bg-white" >
        <div class="flex flex-col px-3 gap-2">
          <slot></slot>
        </div>
        <!-- <li class="list-none" v-for="locale in locales" :key="locale" @click="switchLocale(locale)">
          {{locale}}
        </li>
        <router-link to="/">{{ $t(`navbar.settings`) }}</router-link> -->
        <!-- <span @click="logoutHandler">{{ $t(`navbar.logout`) }}</span> -->
      </div>
    </transition>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
export default {
  components:{
    // FontAwesomeIcon
  },
  data(){
    return{
      // myEllipsisH:faEllipsisH,
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
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateY(10px);
  opacity: 0;
}
.router-link-active{
  color:deepskyblue;
}
</style>