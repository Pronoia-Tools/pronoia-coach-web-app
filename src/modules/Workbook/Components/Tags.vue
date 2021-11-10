<template>
	<div v-for="tag in tags" v-bind:key="tag">{{ tag.name }}</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
			idWorkBook: {
				type: String,
				requird: true,
			}
		},
	computed:{
		...mapGetters("workBook",["getWorkBookById","getAllTags"]),
	},
	data() {
			return {
				workbookSelected: null,
				tags:null,
				tagsWB:null
			};
		},
	methods:{
		...mapActions("workBook", [
				"loadTags",
			]),
		filterWorkBook(){
			this.workbookSelected = this.getWorkBookById(this.idWorkBook)
		},
		async getTagsWB(){
			this.tagsWB = await this.loadTags(this.idWorkBook)
			console.log(this.tagsWB)
		},
		getTags(){
			this.tags = this.getAllTags
			console.log(this.tags)
		}
	},
	mounted() {
		this.getTagsWB()
		this.filterWorkBook
		this.getTags()
	},
	watch:{
		tagsWB(){
			this.getTags()
		}
	}
}

</script>

<style>

</style>