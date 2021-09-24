<template>
  <div class="flex">
    <!-- SIDEBAR -->
    <div class="border-r border-b border-black transition-all duration-1000 flex-shrink-0" :class="isSidebarOpen">
      <div class="border-b border-black flex justify-between items-center p-2">
        {{ $t('workbook.workbookLayout.sales') }} <font-awesome-icon :icon="sortDown" />
      </div>
      <div class="border-b border-black flex justify-between items-center p-2" @click="toogleDropdownWorkBooks">
        {{ $t('workbook.workbookLayout.eWorkbooks') }} 
        <font-awesome-icon :icon="sortDown" v-if="!dropdownWorkbooks"/>
        <font-awesome-icon :icon="sortUp" v-else/>
      </div>
      <Spiner v-if="getLoading"/>
        <!-- WORKBOOK LIST -->

        <div v-for="workbook in workBooksList" 
            v-show="dropdownWorkbooks" 
            :key="workbook.id" 
            class="flex justify-center items-center p-2 border border-transparent hover:border-gray-500 transition-all"
            @click="$router.push({name:'workbook',params:{idWorkBook:workbook.id}})"
        >
          {{workbook.title}}
        </div>
        <div 
          v-show="dropdownWorkbooks" 
          class="flex justify-between items-center p-2 px-4 border border-transparent hover:border-gray-500 transition-all"
          @click="$router.push({name:'workbook',params:{idWorkBook:'new'}})"
        >
          Create New Workbook <font-awesome-icon :icon="plus" />
        </div>
      
      <div class="border-b border-black flex justify-between items-center p-2">
        {{ $t('workbook.workbookLayout.customers') }} <font-awesome-icon :icon="sortUp" />
      </div>


    </div>
    <div class="flex-grow relative">    
      <font-awesome-icon v-if="!sidebarOpen" :icon="myChevronRight" class="absolute top-3 left-0 p-2 text-5xl bg-purple-700 rounded-r z-50" @click="toogleSidebarOpen"/>
      <font-awesome-icon v-else :icon="myChevronLeft" class="absolute top-3 left-0 p-2 text-5xl bg-purple-700 z-50" @click="toogleSidebarOpen"/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown, faSortUp, faPlus, faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { mapActions,mapGetters } from 'vuex'
import Spiner from '../../../components/Spiner.vue'

export default {
  components:{
    FontAwesomeIcon,
    Spiner
  },
  data(){
    return{
      sortDown:faSortDown,
      sortUp:faSortUp,
      plus:faPlus,
      myChevronRight:faChevronRight,
      myChevronLeft:faChevronLeft,

      dropdownWorkbooks:false,
      sidebarOpen:false
    }
  },
  methods:{
    ...mapActions("workBook",["loadWorkbooks"]),
    toogleDropdownWorkBooks(){
      this.dropdownWorkbooks = !this.dropdownWorkbooks
    },
    toogleSidebarOpen(){
      this.sidebarOpen = !this.sidebarOpen
    },
    loadData(){
      // prevent duplicate values showing everytime navigating workbook
      if (this.getWorkBooks.length < 1) {
        this.loadWorkbooks()
      }
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBooks","getLoading"]),
    workBooksList(){
      return this.getWorkBooks
    },
    isSidebarOpen(){
      return this.sidebarOpen?"text-white invisible w-1":" w-64 visible"
    }
  },
  created(){
    this.loadData() 
  }

};
</script>

<style>
</style>