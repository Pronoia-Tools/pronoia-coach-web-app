<template>
  <!-- <button class="px-4 py-2 rounded" :class="isSolid"> -->
  <button class="px-4 py-2 rounded" :class="isSolid">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props:{
    transparent:{
      type:Boolean,
      default:false
    },
    childclass:{
      type:String,
      // default:"bg-myPurple"
    }
  },
  computed:{
    isSolid(){
      return `${this.transparent ? `bg-transparent border text-black`:`bg-myPurple text-white`} ${this.childclass}` 
    }
  }
}
</script>

<style>

</style>