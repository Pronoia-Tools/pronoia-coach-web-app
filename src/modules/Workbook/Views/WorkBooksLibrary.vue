<template>
	<div class="flex flex-col w-full h-full items-center">
		<!-- <div class="m-4">
			<input
				@keydown="onChange"
				v-model="inputWB"
				placeholder="Buscar"
				type="text"
				name=""
				id=""
			/>
		</div> -->
		<div class="flex flex-col W-full justify-center items-center m-3">
			<h1>Your workbooks</h1>
				<div v-if="inputWB === null" class="flex flex-row items-center justify-center" >
          <div
            class=" m-3 w-1/6 flex flex-col items-center"
            v-for="workbook in allWBS"
            :key="workbook.id"
          >
						<div class="h-44 w-32"  v-if="workbook.image">
							<img class="object-fill w-full h-full" :src="workbook.image" alt="" @click="gotopreview(workbook.id)" />
						</div>
						<div class="h-44 w-32" v-if="!workbook.image">
							<img class="object-fill w-full h-full" :src="require('./no-image.png')" alt=""  @click="gotopreview(workbook.id)" />
						</div>
            <h2 class="h-4">{{ workbook.title }}</h2>
          </div>
        </div>
        <div v-if="inputWB !== null" class="flex flex-row items-center justify-center" >
          <div
            class=" m-3 w-1/6 flex flex-col items-center"
            v-for="workbook in wokbookFilter"
            :key="workbook.id"
          >
            <img :src="workbook.image" alt="" @click="gotopreview(workbook.id)" />
						<div v-if="!workbook.image">
							<img :src="require('./no-image.png')" alt="" @click="gotopreview(workbook.id)" />
						</div>
            <h2 class="h-4">{{ workbook.title }}</h2>
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
	import  imageS from './no-image.png'
	/* import Spiner from "../../../components/Spiner.vue"; */

	export default {
		name: "WorkbookList",
		/*  components: { Spiner }, */
		data() {
			return {
				wokbookFilter: null,
				inputWB: null,
				allWBS: null,
				imageS: imageS
			};
		},
		computed: {
			...mapGetters("workBook", ["getWorkBooks", "getLoading"]),
		},
		methods: {
			gotopreview(id) {
				let route = this.$router.resolve({
					name: "workbook-rich-text-view",
					params: { idWorkBook: id },
				});
				window.open(route.href);
			},
			workBooksList() {
				this.allWBS = this.getWorkBooks;
				console.log(this.allWBS);
			},
			onChange() {
        if (this.inputWB === '') {
          this.wokbookFilter = null
        }
				this.wokbookFilter = this.allWBS.filter((e) =>
					e.title.includes(this.inputWB.toLowerCase()),
				);
			},
		},
		created() {
			this.workBooksList();
		},
	};
</script>

<style></style>
