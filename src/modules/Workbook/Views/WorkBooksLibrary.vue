<template>
	<div class="flex flex-col w-full h-full items-center">
    <div class="m-4">
      <input placeholder="Buscar" type="text" name="" id="">
    </div>
		<div class="flex flex-col W-full justify-center items-center m-3">
			<h1>Your workbooks</h1>
      <div class="flex flex-row items-center justify-center">
        <div class=" m-3 w-1/6 flex flex-col items-center" v-for="workbook in wokbookFilter" :key="workbook.id">
          <img :src="workbook.image" alt="" @click="gotopreview(workbook.id)" />
          <h2>{{ workbook.title }}</h2>
        </div>
      </div>
		</div>
		<div>
			<h1>Shared workbooks</h1>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from "vuex";
	/* import Spiner from "../../../components/Spiner.vue"; */

	export default {
		name: "WorkbookList",
		/*  components: { Spiner }, */
		data() {
			return {
        wokbookFilter: null
      };
		},
		computed: {
			...mapGetters("workBook", ["getWorkBooks", "getLoading"]),
		},
		methods: {
			gotopreview(id) {
				let route = this.$router.resolve({
					name: "workbook-rich-text-preview",
					params: { idWorkBook: id },
				});
				window.open(route.href);
			},
      workBooksList() {
				this.wokbookFilter = this.getWorkBooks;
			},
		},
		created() {
      this.workBooksList()
    },
	};
</script>

<style></style>
