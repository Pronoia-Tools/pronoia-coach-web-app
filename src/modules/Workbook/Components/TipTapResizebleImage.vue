<template>
  <node-view-wrapper class="vue-component-resizeble-image" :style="{justifyContent:node.attrs.justify}">
    <div v-if="editor" class="image-container" v-resize="changeSize" :style="{width:`${node.attrs.width}px`, resize:editor.view.editable?'horizontal':'none' }">
      <div class="image-content relative">
      <img :src="node.attrs.src">
      <div class="justyfy-buttons"  v-if="editor && editor.view.editable">
        <button @click="changeJustyfy('start')"><FontAwesomeIcon :icon="myAlignLeft" ></FontAwesomeIcon></button>
        <button @click="changeJustyfy('center')"><FontAwesomeIcon :icon="myAlignCenter" ></FontAwesomeIcon></button>
        <button @click="changeJustyfy('end')"><FontAwesomeIcon :icon="myAlignRight" ></FontAwesomeIcon></button>
        <div
          class="drag-handle"
          contenteditable="false"
          draggable="true"
          data-drag-handle
        />
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
      console.log(this.editor)
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
  transition: border 0.3s ease-in-out;
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
    transition: opacity 0.3s ease-in-out;
    font-size: 1rem;
    border-radius: 0.5rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      &:hover{
        background: rgba(0, 0, 0, .5);
        border-radius: 0.5rem;
      }
    }
    .drag-handle {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    top: 5px;
    left: 5px;
    cursor: grab;
    border: 5px dashed transparent;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"><path style="fill:white; " d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
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
    // border: 2px solid black;
    background-image: url("http://i.imgur.com/hQZDwHs.png");
    // background-position: center;
    // background-repeat: no-repeat; 
    // background-size: cover; 

    /*size does not work*/  
    display:block;  
    width: 300px !important;
    height: 300px !important;
}
</style>