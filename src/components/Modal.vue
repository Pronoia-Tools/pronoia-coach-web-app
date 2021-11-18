<template>
  <div class="modal-mask" v-if="showModal">
    <div class="modal-wrapper">
      <div class="modal-container">

        <div class="modal-header">
          <slot name="header">
            default header
          </slot>
        </div>

        <div class="modal-body">
          <slot name="body">
            default body  
          </slot>
        </div>

        <div class="modal-footer" @click="$emit('toogleShowModal')">
          <FontAwesomeIcon :icon="myTimesCircle"></FontAwesomeIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

export default {
  components:{
    FontAwesomeIcon
  },
  data(){
    return{
      myTimesCircle:faTimes
    }
  },
  props:{
    showModal:{
      type:Boolean,
    }
  },
  emits: ['toogleShowModal']
  
}
</script>

<style >
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
  font-weight: bold;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer{
  background: white;
  position: absolute;
  top: -15px;
  right: -15px;
  font-size: 1rem;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  cursor: pointer;
}


/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>