<template>
  <div v-if="!workBook">
    <SpinerVue/>
  </div>
  <div class="w-full p-10" v-else>
    <!-- Header -->
    <div class="w-full flex justify-between items-center">
      <FontAwesomeIcon :icon="Backward" class="text-3xl"/>
      <ButoomCustomVue transparent="true">Edit Workbook</ButoomCustomVue>
      <div class="flex items-center gap-1">
        <ButoomCustomVue transparent="true">Create a Copy</ButoomCustomVue>
        <FontAwesomeIcon class="text-3xl" :icon="InfoCircle"/>
      </div>
      <div class="flex items-center gap-1">
        <ButoomCustomVue transparent="true">Submit for MarketPlace Review</ButoomCustomVue>
        <FontAwesomeIcon class="text-3xl" :icon="InfoCircle"/>
      </div>  
    </div>

    <!-- WORKBOOK DETAILS -->
    <div>
      <h2>Workbook Information</h2>
      <div class="grid grid-cols-12 px-4">
        <!-- image -->
        <div class="col-span-4 row-span-6 h-96 flex justify-center">
          <img class="h-full" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1588152105" alt="cover book">
        </div>
                
        <div class=" text-right col-span-8 row-span-6 h-96 flex flex-col gap-4">
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="title">Title: </label>
              <input type="text" placeholder="Add text" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.title">
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">By:</label>
              <input type="text" placeholder="Add text" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.author">
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">Edition:</label>
              <div class="flex gap-2 w-full">
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.edition">
                  <option value="1" selected>1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3ed</option>
                </select>
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.language">
                  <option >Select language</option>
                  <option value="Spanish">Español</option>
                  <option selected value="English">Ingles</option>
                </select>
              </div>
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">Published:</label>
              <label class=" w-full text-left" for="author">{{workBook.status}}</label>
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">Price:</label>
              <div class="flex gap-2 w-full">
                <input type="number" placeholder="19.99" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.price">
          
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.currency">
                  <option selected>Select currenci</option>
                  <option value="Spanish">USD</option>
                  <option value="English">PESOS</option>
                </select>
              </div>
          </div>
          <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">Tags:</label>
              <input type="text" placeholder="Add text" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.tags">
          </div>
        </div>
                
        <textarea class=" col-span-12 h-40 p-4 placeholder-black mt-4 border border-gray-500" placeholder="Describe yourself here..."></textarea>
      </div>
    </div>

    <div class="px-4">
      <h2>For Coaches</h2>
      <h3>Send Copy to a client</h3>
      <div class="flex gap-5">
        <div class="w-1/2">
          <div class="flex items-center gap-3 my-4">
            <input type="checkbox" name="signDashboard" class="block"/> 
            <label class="block" for="cbox2">Create custom clientWorkbook</label>
          </div>
          <div class="flex items-center gap-3 my-4">
            <input type="checkbox" name="signDashboard" class="block"/> 
            <label class="block" for="cbox2">Clients Pays for Workbook</label>
          </div>
          <input type="email"  class="border border-gray-500 rounded px-2 py-2 w-full">
          <ButoomCustomVue class="w-full mt-4">Send invitation</ButoomCustomVue>
        </div>
        <div class="">
          <div class="flex items-center gap-3 my-4">
            <input type="checkbox" name="signDashboard" class="block"/> 
            <label class="block" for="cbox2">eWorkbook is avalible for pusheas by clientsleavin the practice</label>
          </div>

          <div >
            <span>Active clients using this workbook</span>
            <div class="grid grid-cols-3 w-full gap-2 border border-gray-500 bg-gray-400  rounded p-2 ">
              <span>NAME</span>
              <span>EMAIL</span>
              <span class="text-center">ANSWERS</span>
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
import { mapGetters } from 'vuex';
import SpinerVue from '../../../components/Spiner.vue';


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
    ...mapGetters("workBook",["getWorkBookById"]),
  },
  methods:{
    loadWorkBook(){
      let workBookSelected

      if (this.idWorkBook==="new") {
        workBookSelected = {
          title:"",
          published:new Date(),
          edition:1,
          language:"",
          price:"",
          currency:"",
          status:"Editable",
          author:"",
          tags:""
        }
      }else{
        console.log("getWorkBookById",this.idWorkBook)
        workBookSelected = this.getWorkBookById(this.idWorkBook) 
        console.log(workBookSelected)
        if (!workBookSelected){
          console.log("fsdafsad")
          this.$router.push({name:"no-workbook"})
        }
      }
      this.workBook = workBookSelected
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