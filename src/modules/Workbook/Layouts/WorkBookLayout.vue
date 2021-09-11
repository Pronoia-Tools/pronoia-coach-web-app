<template>
  <div class="flex">
    <div class=" w-2/12 border-r border-black">
      <div class="border-b border-black flex justify-between items-center p-2">
        Sales <font-awesome-icon :icon="sortDown" />
      </div>

      <div class="border-b border-black flex justify-between items-center p-2" @click="toogleDropdownWorkBooks">
        eWorkbooks 
        <font-awesome-icon :icon="sortDown" v-if="!dropdownWorkbooks"/>
        <font-awesome-icon :icon="sortUp" v-else/>
      </div>
      <Spiner v-if="loading"/>
        <!-- WORKBOOK LIST -->

        <div v-for="workbook in workbooks" v-show="dropdownWorkbooks" :key="workbook.id" class="flex justify-center items-center p-2 border border-transparent hover:border-gray-500 transition-all">
          {{workbook.title}}
        </div>
        <div v-show="dropdownWorkbooks" class="flex justify-between items-center p-2 px-4 border border-transparent hover:border-gray-500 transition-all">
          Create New Workbook <font-awesome-icon :icon="plus" />
        </div>
      
      <div class="border-b border-black flex justify-between items-center p-2">
        Customers <font-awesome-icon :icon="sortUp" />
      </div>
    </div>
    <div class="flex-grow">    
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown, faSortUp, faPlus } from '@fortawesome/free-solid-svg-icons'
import { mapActions,mapState } from 'vuex'
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
    ...mapActions("woordBook",["loadWorkbooks"]),
    ...mapState("woordBook",["loading","workbooks"])
  },
  created(){
    this.loadData() 
  }

};
</script>

<style>
</style>