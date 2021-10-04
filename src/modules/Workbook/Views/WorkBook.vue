<template>
  <div v-if="!workBook">
    <SpinerVue/>
  </div>
  <div class="w-full p-5 mt-10 md:p-10 md:mt-0" v-else>
    <!-- Header -->
    <div class="w-full flex justify-between items-start flex-col gap-4 
          md:flex-row md:gap-0">
      <div class="flex items-center gap-5">
        <FontAwesomeIcon :icon="Backward" class="text-3xl"/>
        <ButoomCustomVue transparent="true" @click="$router.push({name:'workbook-rich-text',params:{idWorkBook:idWorkBook}})">{{ $t('workbook.workbook.edit') }}</ButoomCustomVue>
      </div>
      <div class="flex items-center gap-1">
        <ButoomCustomVue transparent="true">{{ $t('workbook.workbook.createCopy') }}</ButoomCustomVue>
        <FontAwesomeIcon class="text-3xl" :icon="InfoCircle"/>
      </div>
      <div class="flex items-center gap-1">
        <ButoomCustomVue transparent="true">{{ $t('workbook.workbook.submit') }}</ButoomCustomVue>
        <FontAwesomeIcon class="text-3xl" :icon="InfoCircle"/>
      </div>  
    </div>

    <!-- WORKBOOK DETAILS v2 -->
    <div>
      <h2 class=" text-subtitle font-semibold">{{ $t('workbook.workbook.information') }}</h2>
      <div class="grid grid-cols-12 px-4 gap-y-4">
        <!-- image -->
        <div class="col-span-12 md:col-span-4 row-span-6 h-96 flex justify-center">
          <img class="h-full" src="https://cdn.discordapp.com/attachments/817229566779064340/891000630779473950/unknown.png" alt="cover book">
        </div>
                
        <div class=" text-right col-span-12 md:col-span-8 row-span-6 h-96 flex flex-col gap-4">
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="title">{{ $t('workbook.workbook.title') }}: </label>
              <input type="text" placeholder="Add text" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.title">
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">{{ $t('workbook.workbook.by') }}:</label>
              <input type="text" placeholder="Add text" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.author">
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">{{ $t('workbook.workbook.edition') }}:</label>
              <div class="flex gap-2 w-full">
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.edition">
                  <option value="1" selected>1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3ed</option>
                </select>
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.language">
                  <option value="" selected >{{ $t('workbook.workbook.language') }}</option>
                  <option value="Spanish">Español</option>
                  <option value="English">Ingles</option>
                </select>
              </div>
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">{{ $t('workbook.workbook.published') }}:</label>
              <label class=" w-full text-left" for="author">{{workBook.status}}</label>
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">{{ $t('workbook.workbook.price') }}:</label>
              <div class="flex gap-2 w-full">
                <input type="number" placeholder="19.99" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.price">
          
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.currency">
                  <option value="" selected>{{ $t('workbook.workbook.currency') }}</option>
                  <option value="Spanish">USD</option>
                  <option value="English">PESOS</option>
                </select>
              </div>
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">{{ $t('workbook.workbook.tags') }}:</label>
              <input type="text" placeholder="Add text" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.tags">
          </div>
        </div>
                
        <textarea class=" col-span-12 h-40 p-4 placeholder-black mt-4 border border-gray-500" :placeholder=" $t('workbook.workbook.describePlaceHolder') " v-model="workBook.description"></textarea>
        
        <div class="text-right col-span-12">
          <ButoomCustomVue v-if="idWorkBook==='new'" @click="saveNewWorkbook">{{ $t('workbook.workbook.save') }}</ButoomCustomVue>
          <div v-else class="flex flex-col justify-end gap-2 md:flex-row">
            <ButoomCustomVue class="w-full md:w-auto" @click="updateCurrentWorkbook">{{ $t('workbook.workbook.saveChanges') }}</ButoomCustomVue>
            <ButoomCustomVue class="w-full md:w-auto" @click="deleteCurrentWorkbook" color="myRedAlert">{{ $t('workbook.workbook.delete') }}</ButoomCustomVue>
          </div>
        </div>
      </div>
    </div>

    <div class="px-4">
      <h2 class="text-subtitle">{{ $t('workbook.workbook.for') }}</h2>
      <h3>{{ $t('workbook.workbook.send') }}</h3>
      <div class="flex gap-5 flex-col md:flex-row">
        <div class="w-full md:w-1/2">
          <div class="flex items-center gap-3 my-4">
            <input type="checkbox" name="signDashboard" class="block"/> 
            <label class="block" for="cbox2">{{ $t('workbook.workbook.create') }}</label>
          </div>
          <div class="flex items-center gap-3 my-4">
            <input type="checkbox" name="signDashboard" class="block"/> 
            <label class="block" for="cbox2">{{ $t('workbook.workbook.clients') }}</label>
          </div>
          <input type="email"  class="border border-gray-500 rounded px-2 py-2 w-full">
          <ButoomCustomVue class="w-full mt-4">{{ $t('workbook.workbook.sendInvitation') }}</ButoomCustomVue>
        </div>

        <div class="">
          <div class="flex items-center gap-3 my-4">
            <input type="checkbox" name="signDashboard" class="block"/> 
            <label class="block" for="cbox2">{{ $t('workbook.workbook.eWorkbook') }}</label>
          </div>

          <div>
            <span>{{ $t('workbook.workbook.active') }}</span>
            <div class="grid grid-cols-3 w-full gap-2 border border-gray-500 bg-gray-400  rounded p-2 ">
              <span>{{ $t('workbook.workbook.table.name') }}</span>
              <span>{{ $t('workbook.workbook.table.email') }}</span>
              <span class="text-center">{{ $t('workbook.workbook.table.answers') }}</span>
            </div>
            <div class="grid grid-cols-3 w-full gap-2  p-2">
              <span>Victor</span>
              <span class=" truncate ">victormanu31611@gmail.com</span>
              <span class="text-center">1</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowLeft,faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import ButoomCustomVue from '../../../components/ButoomCustom.vue';
import { mapGetters, mapActions, mapState } from 'vuex';
import SpinerVue from '../../../components/Spiner.vue';
import Swal from 'sweetalert2'

export default {
  components:{
    ButoomCustomVue,FontAwesomeIcon,SpinerVue
  },
  props: {
    idWorkBook: {
      type: String,
      requird: true,
    },
  },
  data(){
    return{
      Backward:faArrowLeft,
      InfoCircle:faInfoCircle,
      workBook:null,
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById", "getLastWorkBook"]),
    ...mapState("workBook", ["lastWorkBook"])
  },
  methods:{
    ...mapActions("workBook",["saveWorkbook","updateWorkbook","deleteWorkbook"]),
    loadWorkBook(){
      let workBookSelected

      if (this.idWorkBook==="new") {
        workBookSelected = {
          title:"",
          published:new Date(),
          edition:1,
          language:"",
          price:0.00,
          currency:"",
          status:"Editable",
          author:"",
          tags:"",
          description: '',
        }
      }else{
        console.log("getWorkBookById",this.idWorkBook)
        workBookSelected = this.getWorkBookById(this.idWorkBook) 
        if (!workBookSelected){
          this.$router.push({name:"no-workbook"})
        }
      }
      this.workBook = workBookSelected
    },

    async saveNewWorkbook(){
      new Swal({
        title: 'Espere por favor!',
        allowOutsideClick:false
      })
      Swal.showLoading()
      let newWorkbook = await this.saveWorkbook(this.workBook);
      Swal.fire("Guardado", "entrada guardada",'success').then(()=>{
        console.log('id')
      console.log(newWorkbook.id)
      this.$router.push({path: '/workbook/'+newWorkbook.id})
      });
      
      

    },
    async updateCurrentWorkbook(){
      new Swal({
        title: 'Espere por favor!',
        allowOutsideClick:false
      })
      Swal.showLoading()

      await this.updateWorkbook(this.workBook)

      Swal.fire("Actualizado", "entrada actualizada",'success')
    },
    deleteCurrentWorkbook(){
      Swal.fire({
        title: 'Are you sure?',
        text: "you will see this in the trashcan!!",
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: `Delete`,
        denyButtonText: `Cancel`,
      }).then(async (result) => {
        if (result.isConfirmed) {
          new Swal({
            title: 'Espere por favor!',
            allowOutsideClick:false
          })
          Swal.showLoading()
          await this.deleteWorkbook(this.workBook.id)
          Swal.fire("Deleted", "entrada deleted",'success')
          this.$router.push({name:"no-workbook"})
        } 
      })
      
    }
  },
  created(){
    this.loadWorkBook()
  },
  watch:{
    idWorkBook(){
        this.loadWorkBook()
    }
  }
};
</script>

<style>
</style>