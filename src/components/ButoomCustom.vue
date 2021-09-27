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
      default:"myPurple"
    }
  },
  computed:{
    isSolid(){
      return this.transparent ? `bg-transparent border border-${this.color} text-black`:`bg-${this.color} text-white`
    }
  }
}
</script>

<style>

</style>