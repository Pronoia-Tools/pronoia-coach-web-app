<template>
  <div class="container mx-auto" v-if="loading">
    <Spiner/>
  </div>
  <div class="" v-else>
    <!-- HEADERS -->
    <div class="flex gap-1 justify-end px-8 mt-4 mb-2">
      <input type="text" placeholder="Title or Author" v-model="searchTitle" class="border border-gray-500 rounded px-2 ">
      <select name="Language" class="border border-gray-500 rounded px-2 w-40" v-model="searchlanguage">
        <option value="" selected>Select language</option>
        <option value="Spanish">Español</option>
        <option value="English">Ingles</option>
      </select>
      <select name="Status" class="border border-gray-500 rounded px-2 w-40" v-model="searchStatus">
        <option value="" selected>Status</option>
        <option value="Published">Published</option>
        <option value="Editable">Editable</option>
        <option value="Uneditable">Uneditable</option>
      </select>
      <ButoomCustomVue @click="print">Filter</ButoomCustomVue>
    </div>

    <!-- TABLE -->
    <div class="w-full">
      <div class="container grid grid-cols-11 border-t border-b border-gray-500 py-4 px-4 text-center">
        <span class="col-span-1">#</span>
        <span class="col-span-2">Title</span>
        <span class="col-span-2">Published at</span>
        <span class="col-span-1">Edition</span>
        <span class="col-span-1">Language</span>
        <span class="col-span-1">Price</span>
        <span class="col-span-1">Status</span>
        <span class="col-span-2">Options</span>
      </div>
      
      <WorkBookRow v-for="(workbook) in getWorkBooks" :key="workbook" :workbookDetails="workbook"/>
      

    </div>
    
  </div>
</template>

<script>
import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import { mapState,mapGetters } from 'vuex'
import Spiner from '../../../components/Spiner.vue'
import WorkBookRow from '../Components/workBookRow.vue'

export default {
  components:{
    ButoomCustomVue,
    Spiner,
    WorkBookRow
  },
  data(){
    return{
      searchTitle:"",
      searchlanguage:"",
      searchStatus:""
    }
  },
  methods:{
    print(){
      console.log('sadf')
    }
  },
  computed:{
    ...mapState("woordBook",["loading","workbooks"]),
    ...mapGetters("woordBook",["getWorkBookByTitle"]),
    getWorkBooks(){
      return this.getWorkBookByTitle(this.searchTitle,this.searchlanguage,this.searchStatus)
    }

  },
}
</script>

<style>

</style>