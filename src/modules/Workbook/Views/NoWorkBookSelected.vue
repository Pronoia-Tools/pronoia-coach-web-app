<template>
  <div class="container mx-auto" v-if="getLoading">
    <Spiner/>
  </div>
  <div class="container mx-auto" v-else>
    <!-- HEADERS -->
    <!-- <div class="flex flex-col gap-1 justify-end px-8 mt-16 mb-2 md:flex-row md:mt-4">
      <input type="text" placeholder="Title or Author" v-model="searchTitle" class="border border-gray-500 rounded p-2 ">
      <select name="Language" class="border border-gray-500 rounded p-2 w-full md:w-40" v-model="searchlanguage">
        <option value="" selected>{{$t("workbook.NoWorkBookSelected.inputLanguage.select")}}</option>
        <option value="Spanish">{{$t("languages.spanish")}}</option>
        <option value="English">{{$t("languages.english")}}</option>
      </select>
      <select name="Status" class="border border-gray-500 rounded p-2 w-full md:w-40" v-model="searchStatus">
        <option value="" selected>{{$t("workbook.NoWorkBookSelected.inputStatus.status")}}</option>
        <option value="Published">{{$t("workbook.NoWorkBookSelected.inputStatus.options.published")}}</option>
        <option value="Editable">{{$t("workbook.NoWorkBookSelected.inputStatus.options.editable")}}</option>
        <option value="Uneditable">{{$t("workbook.NoWorkBookSelected.inputStatus.options.uneditable")}}</option>
      </select>
      <ButoomCustomVue @click="print">{{$t("workbook.NoWorkBookSelected.filter")}}</ButoomCustomVue>
    </div> -->

    <!-- TABLE -->
    <div class="w-full">
      <div class="container grid grid-cols-5 sm:grid-cols-6 md:grid-cols-11 border border-gray-500 py-4 px-4 text-center">
        <span class="col-span-1">#</span>
        <span class="col-span-1 md:col-span-2">{{$t("workbook.NoWorkBookSelected.headerTable.title")}}</span>
        <span class="col-span-1 hidden sm:block md:col-span-2">{{$t("workbook.NoWorkBookSelected.headerTable.published")}}</span>
        <span class="col-span-1">{{$t("workbook.NoWorkBookSelected.headerTable.edition")}}</span>
        <span class="col-span-1 hidden md:block">{{$t("workbook.NoWorkBookSelected.headerTable.language")}}</span>
        <span class="col-span-1 hidden md:block">{{$t("workbook.NoWorkBookSelected.headerTable.price")}}</span>
        <span class="col-span-1 hidden md:block">{{$t("workbook.NoWorkBookSelected.headerTable.status")}}</span>
        <span class="col-span-2">{{$t("workbook.NoWorkBookSelected.headerTable.options")}}</span>
      </div>
      <!-- <div class="container grid grid-cols-11 border-t border-b border-gray-500 py-4 px-4 text-center">
        <span class="col-span-1">#</span>
        <span class="col-span-2">Title</span>
        <span class="col-span-2">Published at</span>
        <span class="col-span-1">Edition</span>
        <span class="col-span-1">Language</span>
        <span class="col-span-1">Price</span>
        <span class="col-span-1">Status</span>
        <span class="col-span-2">Options</span>
      </div> -->
      
      <WorkBookRow v-for="(workbook) in getWorkBooks" :key="workbook.id" :workbookDetails="workbook"/>
      

    </div>
    
  </div>
</template>

<script>
// import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import { mapGetters } from 'vuex'
import Spiner from '../../../components/Spiner.vue'
import WorkBookRow from '../Components/workBookRow.vue'

export default {
  components:{
    // ButoomCustomVue,
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
    // ...mapState("workBook",["loading","workbooks"]),
    ...mapGetters("workBook",["getWorkBookByTitle","getLoading"]),
    getWorkBooks(){
      return this.getWorkBookByTitle(this.searchTitle,this.searchlanguage,this.searchStatus)
    }

  },
}
</script>

<style>

</style>