<template>
  <div class="z-10  text-center hover:bg-gray-200 cursor-pointer flex flex-row items-center justify-center py-2 m-0.5" :class="childclass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    childclass:{
      type:String,
      // default:"bg-myPurple"
    }
  }
}
</script>

<style>

</style>