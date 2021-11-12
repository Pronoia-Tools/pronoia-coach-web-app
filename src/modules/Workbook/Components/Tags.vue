<template>
	<div class="bg-gray-500 w-2/4 h-4/4 text-center rounded-xl text-white" v-for="tag in tagsWorkbook " v-bind:key="tag">{{ tag.name }}</div>
	<input @keydown.enter='addNewTag()' v-bind="tag" type="text">

	<div>
		ALL TAGS 
		<div class="bg-gray-500 w-2/4 h-4/4 text-center rounded-xl text-white" v-for="tag in allTags " v-bind:key="tag">{{ tag.name }}</div>
	</div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  props: {
			idWorkBook: {
				type: String,
				requird: true,
			},
			tagsWorkbook: {
				type: Array,
				requird: true,
			}
		},
	computed:{
		...mapGetters("workBook",["getWorkBookById","getAllTags"]),
		...mapMutations("workBook",["setTagsOnWorkbook"])
	},
	data() {
			return {
				workbookSelected: null,
				tag:null,
				allTags:null,
			};
		},
	methods:{
		...mapActions("workBook", [
				"loadTags",
			]),
		filterWorkBook(){
			this.workbookSelected = this.getWorkBookById(this.idWorkBook)
			console.log(this.workbookSelected)
		},
		addNewTag(){
			this.setTagsOnWorkbook(this.idWorkBook,this.tag)
		},
		getTags(){
			this.allTags = this.getAllTags
			console.log(this.allTags)
		}
	},
	async mounted() {
		this.filterWorkBook()
		await this.loadTags(this.idWorkBook)
		this.getTags()
	},
	watch:{
		idWorkBook(){
			this.filterWorkBook()
			this.loadTags(this.idWorkBook)
			this.getTags()
		}
	}
}

</script>

<style>

</style>