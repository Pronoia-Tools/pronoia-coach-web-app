<template>
  <div class="border rounded text-center hover:bg-opacity-70 cursor-pointer flex flex-row items-center justify-center py-2 m-0.5 shadow" :class="childclass">
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