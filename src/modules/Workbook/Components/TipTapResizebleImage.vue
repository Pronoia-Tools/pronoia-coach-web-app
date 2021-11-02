<template>
  <node-view-wrapper class="vue-component-resizeble-image" :style="{justifyContent:node.attrs.justify}">
    <div class="image-container" v-resize="changeSize" :style="{width:`${node.attrs.width}px`}">
      <div class="image-content relative">
      <img :src="node.attrs.src" >
      <div class="justyfy-buttons">
        <button @click="changeJustyfy('start')"><FontAwesomeIcon :icon="myAlignLeft" ></FontAwesomeIcon></button>
        <button @click="changeJustyfy('center')"><FontAwesomeIcon :icon="myAlignCenter" ></FontAwesomeIcon></button>
        <button @click="changeJustyfy('end')"><FontAwesomeIcon :icon="myAlignRight" ></FontAwesomeIcon></button>
      </div>
      </div>
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAlignLeft,faAlignCenter,faAlignRight } from '@fortawesome/free-solid-svg-icons'

export default {
  components: {
    NodeViewWrapper,
    FontAwesomeIcon
  },
  data(){
    return{
      myAlignLeft:faAlignLeft,
      myAlignCenter:faAlignCenter,
      myAlignRight:faAlignRight,

      
      saveInterval:null,
    }
  },
  props: nodeViewProps,

  methods: {
    changeJustyfy(justify){
      this.node.attrs.justify = justify
    },
    saveSize({width}){
      // console.log(width,height)
      this.node.attrs.width = width
    },
    changeSize({ width, height }) {
      if (this.saveInterval) {
        clearInterval(this.saveInterval)
      }
      this.saveInterval = setTimeout(() => this.saveSize({width,height}) , 500);
    }
  },
}
</script>

<style lang="scss">
.vue-component-resizeble-image {
  border-radius: 0.5rem;
  margin: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image-container{
  position: relative;
  resize: horizontal;
  overflow: auto;
  min-width: 100px;
}
.image-content {
  object-fit: fill;
  img{
    width: 100%;
    object-fit: fill;
  }
  border: 2px solid transparent;

  &:hover{
    border: 2px solid rgb(160, 160, 160);
  }
  .justyfy-buttons{
    background: rgba(0, 0, 0, .8);
    color: white;
    position: absolute;
    top: 5px;
    right: 5px;
    opacity: 0;
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    border-radius: 0.5rem;
    
    &button{
      &:hover{
        background: rgba(0, 0, 0, .5);
        border-radius: 0.5rem;
      }
    }
  }
  &:hover{
    border: 2px solid rgb(160, 160, 160);
    .justyfy-buttons{
      opacity: 1
    }
  }
}
::-webkit-resizer {
    border: 2px solid black;
    background-image: url("https://cdn-icons.flaticon.com/png/512/241/premium/241876.png?token=exp=1635828808~hmac=1ccf9d9d1b7a7850ebe1fa08bf728f14");
    background-position: center;
    background-repeat: no-repeat; 
    background-size: cover; 

    /*size does not work*/  
    display:block;  
    width: 300px !important;
    height: 300px !important;
}
</style>