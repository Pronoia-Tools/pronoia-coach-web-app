<template>
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
    }
  },
  computed:{
    isSolid(){
      return this.transparent ? "bg-transparent border border-purple-800 text-black":"bg-purple-800 text-white"
    }
  }
}
</script>

<style>

</style>