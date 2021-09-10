<template>
  <div>
    <!-- HEADERS -->
    <div>
      <input type="text" placeholder="search">
      <select name="Language">
        <option value="" selected>Select language</option>
        <option value="es">Español</option>
        <option value="en">Ingles</option>
      </select>
      <select name="Status">
        <option value="" selected>Published</option>
        <option value="editable">Editable</option>
        <option value="uneditable">Uneditable</option>
      </select>
      <ButoomCustomVue @click="print">Filter</ButoomCustomVue>
    </div>

    
  </div>
</template>

<script>
import ButoomCustomVue from '../../../components/ButoomCustom.vue'

export default {
  components:{
    ButoomCustomVue
  },
  methods:{
    print(){
      console.log('sadf')
    }
  }
}
</script>

<style>

</style>