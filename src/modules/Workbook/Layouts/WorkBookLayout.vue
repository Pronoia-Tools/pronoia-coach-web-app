<template>
  <div class="flex">
    <div class=" w-64 border-r border-black">
      <div class="border-b border-black flex justify-between items-center p-2">
        Sales <font-awesome-icon :icon="sortDown" />
      </div>

      <div class="border-b border-black flex justify-between items-center p-2" @click="toogleDropdownWorkBooks">
        eWorkbooks 
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
        Customers <font-awesome-icon :icon="sortUp" />
      </div>
    </div>
    <div class="flex-grow bg-red-400">    
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown, faSortUp, faPlus } from '@fortawesome/free-solid-svg-icons'
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

      dropdownWorkbooks:false
    }
  },
  methods:{
    toogleDropdownWorkBooks(){
      this.dropdownWorkbooks = !this.dropdownWorkbooks
    },
    loadData(){
      this.loadWorkbooks
    }
  },
  computed:{
    ...mapActions("workBook",["loadWorkbooks"]),
    ...mapGetters("workBook",["getWorkBooks","getLoading"]),
    workBooksList(){
      return this.getWorkBooks
    }
  },
  created(){
    this.loadData() 
  }

};
</script>

<style>
</style>