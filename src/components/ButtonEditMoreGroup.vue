<template>
    <!-- Button -->
    <button @click="toogleOpen" class="bg-myPurple text-white cursor-pointer hover:bg-gray-400 transition w-16 h-10 rounded-md">
      More...
    </button>
    <!-- MODAL -->
    <transition name="slide-fade">
      <div v-show="isOpen" class=" rounded shadow-2xl p-1 w-40 my-1 border border-black bg-white hover:bg-gray-50" >
        <div class="flex flex-col">
          <slot></slot>
        </div>
      </div>
    </transition>
</template>

<script>

export default {
  components:{
  },
  data(){
    return{
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