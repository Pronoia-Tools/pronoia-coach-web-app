<template>
  <div class="tooltip-container" :class="childClass">
    <slot />
    <div
      class="tooltip"
    >
      <span
        class="text"
      >{{ text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: { 
    text: {
      type: String,
      required: true
    },
    childClass:{
      type:String
    }
  },
}
</script>

<style scoped>
.tooltip-container { 
  position: relative;
  display: inline-block;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tooltip-container:hover .tooltip{
  opacity: 1;

}

.tooltip { 
  color: #ffffff;
  text-align: center;
  padding: 5px 0;
  border-radius: 5px;

  width: 120px;
  top:  100%;
  left: 50%;
  margin-left: -60px;

  opacity: 0;
  transition: opacity 1s;

  position: absolute;
  z-index: 1;

  background: #000000;
  font-size: smaller;
}

</style>