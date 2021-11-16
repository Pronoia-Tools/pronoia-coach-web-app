<template>
	<div class="flex flex-col w-full">
		<div class="flex flex-row flex-wrap">
			<p class="bg-gray-500 w-1/4 h-4/4 m-1 text-center rounded-xl text-white"  v-for="tag in tagsWorkbook " v-bind:key="tag">{{ tag.name }}</p>
		</div>

		<div class="flex flex-row flex-wrap">
			<input @keydown.enter="onChange()" v-model="tagNew" type="text">
			<p class="bg-gray-500 m-1 w-1/4 h-4/4 text-center rounded-xl text-white" v-for="tagAll in filteredTags " v-bind:key="tagAll">{{ tagAll.name }}</p>
		</div>
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
				tagNew:null,
				allTags:null,
				filteredTags:null,
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
		onChange(){
			console.log(this.allTags)
			this.filteredTags = this.allTags.filter(e => e.name.toLowerCase() === this.tagNew.toLowerCase())
		},
		getTags(){
			this.allTags = this.getAllTags
			console.log(this.allTags)
		},
		addNewTag(tagObj){
			console.log(tagObj)
			/* this.setTagsOnWorkbook(this.idWorkBook,tagObj) */
		},
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