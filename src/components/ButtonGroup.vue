<template>
  <div class="relative" @blur="toogleOpen" tabindex="0" ref="dropdown">
    <!-- Button -->
    <div v-if="customText" @click="toogleOpen" class="cursor-pointer rounded hover:bg-gray-400 transition w-6 h-6 p-5 flex items-center justify-center">
      <span class="px-3"> {{ customText }} </span>
    </div>
    <div v-else @click="toogleOpen" class="cursor-pointer rounded-full hover:bg-gray-400 transition w-6 h-6 p-5 flex items-center justify-center">
      <FontAwesomeIcon :icon="myEllipsisV"></FontAwesomeIcon>
    </div>
    <!-- MODAL -->
    <transition name="fade">
      <div v-show="isOpen" class="rounded shadow-2xl absolute top-10 p-1 my-1  w-40 border border-black bg-white hover:bg-gray-50 z-10" :class="positionY">
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
  props: {
    customText: {
      type: String,
    },
    alignMenuY: {
      type: String,
      default:"rigth"
    }
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
  },
  computed:{
    positionY(){
      return this.alignMenuY==='left'?"-left-32":"-left-0"
    }
  }
}
</script>

<style>
/* Las animaciones de entrada y salida pueden usar */
/* funciones de espera y duración diferentes.      */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>