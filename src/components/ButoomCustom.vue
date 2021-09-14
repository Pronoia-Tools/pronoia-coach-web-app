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
    },
    color:{
      type:String,
      default:"purple"
    }
  },
  computed:{
    isSolid(){
      return this.transparent ? `bg-transparent border border-${this.color}-800 text-black`:`bg-${this.color}-800 text-white`
    }
  }
}
</script>

<style>

</style>