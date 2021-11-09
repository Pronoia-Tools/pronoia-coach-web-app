<template>
	<div class="p-3 border border-border mb-20 mt-10">
		<h1 id="Questions" class="text-subtitle">{{
			$t("workbook.workbookText.questions")
		}}</h1>
		<div class="">
			<div class="w-full">
				<div
					class="w-full mb-4"
					v-for="question in questionsArray"
					:key="question.id"
				>
					<label class="block" for="question">{{ question.question }}</label>
					<input
						class=" w-full py-2 border-2 border-border"
						type="text"
						placeholder="answer"
						v-model="question.answer"
					/>
				</div>
			</div>
		</div>

		<div v-if="questionsArray.length === 0" class="py-10">
			<h2 class=" text-lgText text-gray-400">{{
				$t("workbook.workbookText.noQuestions")
			}}</h2>
		</div>
		<div class="w-full flex justify-end">
			<ButoomCustom @click="addQuestion">{{
				$t("workbook.workbookText.add")
			}}</ButoomCustom>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from "vuex";
	import ButoomCustom from "../../../components/ButoomCustom.vue";
	import { Toast } from "@/components/Toast.js";

	import Swal from "sweetalert2";
	export default {
		components: { ButoomCustom },
		props: {
			sectionSelected: {
				type: Number,
				required: true,
			},
			idWorkbook: {
				type: Number,
				required: true,
			},
		},
		data() {
			return {
				questionsArray: [],
			};
		},
		methods: {
			...mapActions("workBook", ["updateWorkbookAddQuestion"]),
			workQuestions() {
				const workbookQuestion = this.getWorkBookById(this.idWorkbook);
				// console.log(workbookQuestion)
				if (workbookQuestion.units) {
					// this.questionsArray = workbookQuestion.units[this.sectionSelected].questions
				}
			},
			async addQuestion() {
				const { value: newQuestion } = await Swal.fire({
					title: this.$t("workbook.workbookText.alerts.addQuestion.title"),
					input: "text",
					inputLabel: this.$t(
						"workbook.workbookText.alerts.addQuestion.inputLabel",
					),
					inputValue: "",
					showCancelButton: true,
					inputValidator: (value) => {
						if (!value) {
							return this.$t(
								"workbook.workbookText.alerts.addQuestion.validatorMessage",
							);
						}
					},
				});

				if (newQuestion) {
					// const questionsListLength = this.questionsArray.lenght
					// const newArrayList = [...this.questionsArray,{
					//   "id":`${questionsListLength}`,
					//   "question":newQuestion,
					//   "answer":"",
					// }]
					// this.questionsArray = newArrayList

					const res = await this.updateWorkbookAddQuestion({
						idWorkbook: this.idWorkbook,
						sectionSelected: this.sectionSelected,
						newQuestion: newQuestion,
					});
					// console.log(res)
					if (res) {
						Toast.fire({
							icon: "success",
							text: this.$t("swallAlertGeneral.succces"),
						});
					} else {
						Toast.fire({
							icon: "error",
							text: this.$t("swallAlertGeneral.error"),
						});
					}
				}
			},
		},
		computed: {
			...mapGetters("workBook", ["getWorkBookById"]),
		},
		created() {
			this.workQuestions();
		},
		watch: {
			sectionSelected() {
				this.workQuestions();
			},
		},
	};
</script>

<style></style>
