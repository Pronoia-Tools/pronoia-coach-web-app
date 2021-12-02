<template>
  <div class="flex">
    <!-- SIDEBAR -->
    <div class="border-r border-b border-black flex-shrink-0" :class="isSidebarOpen">
      <!-- SALES -->
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
      <div class="bg-red-300">
        <div v-for="workbook in workBooksList"
            :key="workbook.id" 
            class="flex justify-center items-center border border-transparent hover:border-gray-500 transition-all"
            :class="isdropdownWorkbooks"
            @click="$router.push({name:'workbook',params:{idWorkBook:workbook.id}})"
        >
          <router-link :to="{name:'workbook',params:{idWorkBook:workbook.id}}">{{workbook.title}}</router-link>
          <!-- {{workbook.title}} -->
        </div>
        <div
          class="flex justify-between items-center px-4 border border-transparent hover:border-gray-500 transition-all"
          :class="isdropdownWorkbooks"
          @click="$router.push({name:'workbook',params:{idWorkBook:'new'}})"
        >
          {{$t("workbook.workbookLayout.createWorkbook")}} <font-awesome-icon :icon="plus" />
        </div>
      </div>
      <!-- CUSTOMERS -->
      <div class="border-b border-black flex justify-between items-center p-2">
        {{ $t('workbook.workbookLayout.customers') }} <font-awesome-icon :icon="sortUp" />
      </div>


    </div>
    <div class="flex-grow relative">    
      <font-awesome-icon v-if="!sidebarOpen" :icon="myChevronRight" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple rounded-r z-50" @click="toogleSidebarOpen"/>
      <font-awesome-icon v-else :icon="myChevronLeft" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple z-50" @click="toogleSidebarOpen"/>
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

      dropdownWorkbooks:true,
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
    },
    isdropdownWorkbooks(){
      return this.dropdownWorkbooks?"h-10 p-2":"h-0 p-0 border-none overflow-hidden"
    }
  },
  created(){
    this.loadData() 
  }

};
</script>

<style>
</style>