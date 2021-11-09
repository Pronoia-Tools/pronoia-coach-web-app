<template>
	<div></div>
	<input type="text" @keypress.enter="">
</template>

<script>
import { mapGetters } from 'vuex'
mapGetters
export default {
  props: {
			idWorkBook: {
				type: String,
				requird: true,
			}
		},
	computed:{
		...mapGetters("workBook", ["getWorkBookById"]),
	},
	data() {
			return {
				workbookSelected: null
			};
		},
	methods:{
		filterWorkBook(){
			this.workbookSelected = this.getWorkBookById(this.idWorkBook)
		}
	}
}
</script>

<style>

</style>