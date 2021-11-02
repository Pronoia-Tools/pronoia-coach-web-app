<template>
  <node-view-wrapper class="vue-component" >
    <div class="image-container" v-resize="changeSize" :style="{width:`${node.attrs.width}px`}">
      <div class="image-content">
      <img :src="node.attrs.src" >
        <!-- <button @click="increase">
          This button has been clicked {{ node.attrs.count }} times.
        </button> -->
        <!-- <span>{{node.attrs.width}}</span> -->
      </div>
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'

export default {
  components: {
    NodeViewWrapper,
  },

  props: nodeViewProps,

  methods: {
    changeSize({ width, height }) {
      // this.width = width;
      console.log(`${width} * ${height}`)
      this.node.attrs.width = width
      // this.height = height;
      // console.log()
    }
  },
}
</script>

<style lang="scss">
.vue-component {
  // background: #FAF594;
  // border: 3px solid #0D0D0D;
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  // background: red;
  // min-height: 15rem;
}
.image-container{
  position: relative;
  resize: horizontal;
  overflow: auto;
  // border: 1px solid blue;
  // background: blue;
}
.image-content {
  // margin-top: 1.5rem;
  // padding: 1rem;
  object-fit: fill;
  // background: yellow;
  img{
    width: 100%;
    object-fit: fill;
  }
  border: 2px solid transparent;

  &:hover{
    border: 2px solid rgb(160, 160, 160);
  }
}
::-webkit-resizer {
    border: 2px solid black;
    // background: blue;
    // box-shadow: 0 0 2px 5px red;
    // outline: 2px dashed #2D9BF0;
    background-image: url("https://cdn-icons.flaticon.com/png/512/241/premium/241876.png?token=exp=1635828808~hmac=1ccf9d9d1b7a7850ebe1fa08bf728f14");
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */

    /*size does not work*/  
    display:block;  
    width: 300px !important;
    height: 300px !important;
}
</style>