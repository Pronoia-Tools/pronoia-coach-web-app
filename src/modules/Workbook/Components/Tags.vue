<template>
	<div>TESTEO</div>
	<div v-for="tag in tags" v-bind:key="tag">{{ tag }}</div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
			idWorkBook: {
				type: String,
				requird: true,
			}
		},
	computed:{
		...mapGetters("workBook"["getWorkBookById","getAllTags"]),
	},
	data() {
			return {
				workbookSelected: null,
				tags:null
			};
		},
	methods:{
		filterWorkBook(){
			this.workbookSelected = this.getWorkBookById(this.idWorkBook)
		},
		getTags(){
			this.tags = this.getAllTags
		}
	},
	mounted() {
		this.getTags
		this.filterWorkBook
	}
}

</script>

<style>

</style>