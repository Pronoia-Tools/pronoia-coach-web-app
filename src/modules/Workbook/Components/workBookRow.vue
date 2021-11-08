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
      <span title="Edit Workbook">
        <font-awesome-icon class="cursor-pointer" :icon="myEdit" @click="$router.push({name:'workbook-rich-text',params:{idWorkBook:workbookDetails.id}})"/>
      </span>
      <span title="View Workbook">
        <font-awesome-icon class="cursor-pointer" :icon="myEye"  @click="$router.push({name:'workbook',params:{idWorkBook:workbookDetails.id}})"/>
      </span>
      <span title="Archive Workbook">
        <font-awesome-icon class="cursor-pointer" :icon="myTrash" @click="deleteCurrentWorkbook" />      
      </span>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { mapActions } from 'vuex';
import Swal from 'sweetalert2'
import moment from 'moment'


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
      return moment.utc(this.workbookDetails.published).local().format("MMM Do YY")
    }
  },
  methods:{
    ...mapActions("workBook",["deleteWorkbook"]),
  
    deleteCurrentWorkbook(){
      Swal.fire({
        title: this.$t("swallAlertGeneral.confirmDelete.title"),
        text: this.$t("swallAlertGeneral.confirmDelete.textTrashcan"),
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: this.$t("swallAlertGeneral.confirmDelete.confirmButtonText"),
        denyButtonText: this.$t("swallAlertGeneral.confirmDelete.denyButtonText"),
      }).then(async (result) => {
        if (result.isConfirmed) {
          new Swal({
            title: this.$t("swallAlertGeneral.wait"),
            allowOutsideClick:false
          })
          Swal.showLoading()
          await this.deleteWorkbook(this.workbookDetails)
          Swal.fire(this.$t("swallAlertGeneral.deleted"), "",'success')
          this.$router.push({name:"no-workbook"})
        } 
      })
      
    }
  },

}
</script>

<style>

</style>