<template>
  <div class="flex">
    <div class="bg-blue-200 w-1/6">
      <div class="border border-black flex justify-between items-center p-2">
        Sales <font-awesome-icon :icon="sortDown" />
      </div>
      <div class="border border-black flex justify-between items-center p-2" @click="toogleDropdownWorkBooks">
        eWorkbooks 
        <font-awesome-icon :icon="sortDown" v-if="!dropdownWorkbooks"/>
        <font-awesome-icon :icon="sortUp" v-else/>
      </div>
        <div v-show="dropdownWorkbooks" class="flex justify-center items-center p-2 border border-transparent hover:border-gray-500 transition-all">
          eWorkbooks
        </div>
        <div v-show="dropdownWorkbooks" class="flex justify-center items-center p-2 border border-transparent hover:border-gray-500 transition-all">
          eWorkbooks
        </div>
        <div v-show="dropdownWorkbooks" class="flex justify-center items-center p-2 border border-transparent hover:border-gray-500 transition-all">
          eWorkbooks
        </div>
        <div v-show="dropdownWorkbooks" class="flex justify-between items-center p-2 px-4 border border-transparent hover:border-gray-500 transition-all">
          Create New Workbook <font-awesome-icon :icon="plus" />
        </div>
      
      <div class="border border-black flex justify-between items-center p-2">
        Customers <font-awesome-icon :icon="sortUp" />
      </div>
    </div>
    <div>    
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faSortDown, faSortUp, faPlus } from '@fortawesome/free-solid-svg-icons'
export default {
  components:{
    FontAwesomeIcon
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
    }
  }

};
</script>

<style>
</style>