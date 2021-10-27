<template>
  <div class="relative" @blur="toogleOpen" tabindex="0" ref="dropdown">
    <!-- Button -->
    <div @click="toogleOpen" class="cursor-pointer rounded-full hover:bg-gray-400 transition w-6 h-6 p-5 flex items-center justify-center">
      <FontAwesomeIcon :icon="myEllipsisV"></FontAwesomeIcon>
    </div>
    <!-- MODAL -->
    <transition name="slide-fade">
      <div v-show="isOpen" class="rounded shadow-2xl absolute top-10 -right-0 py-2 w-40 border border-black bg-white hover:bg-gray-50" >
        <div class="flex flex-col">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
export default {
  components:{
    FontAwesomeIcon
  },
  data(){
    return{
      myEllipsisV:faEllipsisV,
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