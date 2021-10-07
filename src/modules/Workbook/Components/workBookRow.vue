<template>
  <div class="container grid grid-cols-5 sm:grid-cols-6 md:grid-cols-11 py-4 px-4 text-center border border-transparent hover:border-gray-500">
    <span class="col-span-1">{{workbookDetails.id}}</span>
    <span class="col-span-1 md:col-span-2">{{workbookDetails.title}}</span>
    <span class="col-span-1 hidden sm:block md:col-span-2">{{dateString}}</span>
    <span class="col-span-1">{{workbookDetails.edition}}</span>
    <span class="col-span-1 hidden md:block">{{workbookDetails.language}}</span>
    <span class="col-span-1 hidden md:block">{{workbookDetails.price}}$</span>
    <span class="col-span-1 hidden md:block">{{workbookDetails.status}}</span>
    <div class="col-span-2 flex gap-4 justify-center flex-wrap">
      <font-awesome-icon class="cursor-pointer" :icon="myEdit" @click="$router.push({name:'workbook',params:{idWorkBook:workbookDetails.id}})"/>
      <font-awesome-icon class="cursor-pointer" :icon="myEye"  @click="$router.push({name:'workbook',params:{idWorkBook:workbookDetails.id}})"/>
      <font-awesome-icon class="cursor-pointer" :icon="myTrash" />
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