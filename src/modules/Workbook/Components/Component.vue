<template>
  <node-view-wrapper class="vue-component bg-red-200" >
    <div class="container">
      <div class="content">
      <img :src="node.attrs.src">
        <!-- <button @click="increase">
          This button has been clicked {{ node.attrs.count }} times.
        </button> -->
        <span>{{node.attrs.width}}</span>
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
  },
  computed:{
    getSize(){
      return `${this.node.attrs.width}px`
    }
  }
}
</script>

<style lang="scss">
.vue-component {
  // background: #FAF594;
  border: 3px solid #0D0D0D;
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
.container{
  position: relative;
  resize: both;
  // padding: 20px; 
  // width: 300px;
  overflow: auto;
  border: 1px solid black;
}
.content {
  // margin-top: 1.5rem;
  // padding: 1rem;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>