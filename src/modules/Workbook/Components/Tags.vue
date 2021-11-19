<template>
	<div class="flex flex-col w-full">
		<div class="flex flex-row flex-wrap">
			<p
				class="bg-gray-500 w-1/4 h-4/4 m-1 text-center rounded-xl text-white"
				v-for="tag in tagsWorkbook"
				@click="deleteTag(tag)"
				v-bind:key="tag"
				>{{ tag.name }}</p
			>
		</div>

		<div class="flex flex-row flex-wrap">
			<input @keydown.enter="onChange()" v-model="tagNew" type="text" />
			<div
				class="bg-gray-500 m-1 w-1/4 h-4/4 text-center rounded-xl text-white"
				v-for="oneTag in filteredTags"
				@click="addNewTag(oneTag)"
				v-bind:key="oneTag"
				>

				{{ oneTag.name }}

				</div>
				<div class="bg-gray-500 m-1 w-1/4 h-4/4 text-center rounded-xl text-white" @click="addNewTag({name:tagNew})" v-if="flag === true">
					{{ tagNew }}
				</div>
		</div>
	</div>
</template>

<script>
	import { mapActions, mapGetters, mapMutations } from "vuex";

	export default {
		props: {
			idWorkBook: {
				type: String,
				requird: true,
			},
			tagsWorkbook: {
				type: Array,
				requird: true,
			},
		},
		computed: {
			...mapGetters("workBook", ["getAllTags"]),
		},
		data() {
			return {
				workbookSelected: null,
				tagNew: null,
				allTags: null,
				filteredTags: null,
				flag: null,
			};
		},
		methods: {
			...mapMutations("workBook", ["setTagsOnWorkbook", "quitTagsOnWorkbook"]),
			...mapActions("workBook", ["loadTags"]),
			onChange() {
				this.filteredTags = this.allTags.filter(
					(e) => e.name.toLowerCase() === this.tagNew.toLowerCase(),
				);
				if (this.filteredTags.length === 0) {
					this.flag = true
				}
				if (this.filteredTags.length !== 0) {
					this.flag = false
				}
			},
			getTags() {
				this.allTags = this.getAllTags;
			},
			addNewTag(tagObj) {
				this.setTagsOnWorkbook({ idWorkBook: this.idWorkBook, tagNew: tagObj });
			},
			deleteTag(tagObj2) {
				this.quitTagsOnWorkbook({
					idWorkBook: this.idWorkBook,
					tagDelete: tagObj2,
				});
			},
		},
		async mounted() {
			await this.loadTags(this.idWorkBook);
			this.getTags();
		},
		watch: {
			idWorkBook() {
				this.loadTags(this.idWorkBook);
				this.getTags();
				console.log(this.tagsWorkbook);
			},
		},
	};
</script>

<style></style>
