<template>
  <div class="container grid grid-cols-11 py-4 px-4 text-center border border-transparent hover:border-gray-500">
    <span class="col-span-1">{{workbookDetails.id}}</span>
    <span class="col-span-2">{{workbookDetails.title}}</span>
    <span class="col-span-2">{{dateString}}</span>
    <span class="col-span-1">{{workbookDetails.edition}}</span>
    <span class="col-span-1">{{workbookDetails.language}}</span>
    <span class="col-span-1">{{workbookDetails.price}}$</span>
    <span class="col-span-1">{{workbookDetails.status}}</span>
    <div class="col-span-2 flex gap-4 justify-center">
      <font-awesome-icon :icon="myEdit" />
      <font-awesome-icon :icon="myEye" />
      <font-awesome-icon :icon="myTrash" />
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'

export default {
  components:{
    FontAwesomeIcon
  },
  data(){
    return{
      myEdit:faEdit, 
      myEye:faEye, 
      myTrash:faTrash
    }
  },
  props:{
    workbookDetails:{
      type:Object,
      retuired:true,
    }
  },
  computed:{
    dateString(){
      return this.workbookDetails.published.toDateString()
    }
  }

}
</script>

<style>

</style>