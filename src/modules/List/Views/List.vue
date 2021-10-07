<template class="container mx-auto">
  <div class="container mx-auto my-5">
    <h1 class="text-lgText">{{ $t(`workbook.workbookList.title`) }}</h1>

    <div class="border border-black h-full">
      <div class="border border-gray-800 px-5">
        <h2 class="text-lgText my-5">
          {{ $t(`workbook.workbookList.filter.subtitle`) }}
        </h2>
        <div class="flex md:flex-row flex-col justify-around ">
          <div class="flex flex-col">
            <div class="flex justify-end my-5">
              <label class="mr-4">
                {{ $t(`workbook.workbookList.filter.label1`) }}</label
              >
              <input
                class="border-2 border-border rounded-md "
                v-model="searchTitle"
              />
            </div>
            <div class="flex justify-end">
              <label class="mr-4">
                {{ $t(`workbook.workbookList.filter.label2`) }}</label
              >
              <input
                name="author"
                v-model="searchAuthor"
                class="border-2 border-border rounded-md "
              />
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-end my-5 items-center">
              <label class="mr-4">
                {{ $t(`workbook.workbookList.filter.label3`) }}</label
              >

              <select
                v-model="searchlanguage"
                class="border-2 border-border rounded-md  px-7 py-1"
                name="language"
                form="filterForm"
              >
                <option value="" selected>{{$t("input.select")}}</option>
                <option :value="$t('languages.spanis')">{{$t("languages.spanish")}}</option>
                <option :value="$t('languages.englis')">{{$t("languages.english")}}</option>
                <option value="language3">language3</option>
                <option value="language4">language4</option>
              </select>
            </div>
            <div class="flex justify-end items-center">
              <label class="mr-4">
                {{ $t(`workbook.workbookList.filter.label4`) }}</label
              >
              <select
                class="border-2 border-border rounded-md px-7 py-1"
                name="category"
                form="filterForm"
                v-model="searchCategory"
              >
                <option value="" selected>{{$t("input.select")}}</option>
                <option value="Biography">{{$t("workbook.workbookList.categories.novel")}}</option>
                <option value="Novel">{{$t("workbook.workbookList.categories.biography")}}</option>
              </select>
            </div>
          </div>
          <div class="flex flex-col">
            <div class="flex justify-end my-5">
              <label class="mr-4">
                {{ $t(`workbook.workbookList.filter.label5`) }}</label
              >
              <input
                v-model="searchPrice1"
                type="number"
                min="1"
                max="1000"
                class="border-2 border-border rounded-md  px-2  mx-2"
              />
              -
              <input
                v-model="searchPrice2"
                type="number"
                min="1"
                max="1000"
                class="border-2 border-border rounded-md px-2  mx-2"
              />
            </div>
            <div class="flex justify-end items-center">
              <label class="mr-4">
                {{ $t(`workbook.workbookList.filter.label6`) }}</label
              >
              <select
                v-model="arrangeBy"
                class="border-2 border-border rounded-md px-7 py-1"
                name="arrangeBy"
                form="filterForm"
              >
                <option value="" selected>{{$t("input.select")}}</option>
                <option value="Newest">{{$t("workbook.workbookList.arrange.newest")}}</option>
                <option value="Cheapest">{{$t("workbook.workbookList.arrange.cheapest")}}</option>
              </select>
            </div>
          </div>
        </div>
        <div class="flex justify-end my-10 mx-5">
          <button
            @click="print = false"
            class="text-darkLogo border border-darkLogo py-3 px-8 mx-5"
          >
            {{ $t(`workbook.workbookList.filter.button1`) }}
          </button>
          <button
            @click="print = true"
            class="bg-darkLogo text-white py-3 px-8"
          >
            {{ $t(`workbook.workbookList.filter.button2`) }}
          </button>
        </div>
      </div>
      <div
        class="grid md:grid-cols-4 grid-cols-2 container mx-auto flex justify-center"
      >
        <Spiner v-if="getLoading" />
        <div
          v-for="workbook in workBooksList"
          :key="workbook.id"
          class="flex justify-center items-center m-10 w-32 border border-transparent hover:border-gray-500 transition-all cursor-pointer"
          @click="
            $router.push({
              name: 'workbook',
              params: { idWorkBook: workbook.id },
            })
          "
        >
          <img :alt="workbook.title" :src="workbook.image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions, mapGetters } from "vuex";
import Spiner from "../../../components/Spiner.vue";

export default {
  name: "WorkbookList",
  components: { Spiner },
  data() {
    return {
      searchAuthor: "",
      searchTitle: "",
      searchCategory: "",
      searchPrice1: "",
      searchPrice2: "",
      searchlanguage: "",
      arrangeBy: "",
      print: false,
    };
  },
  computed: {
    ...mapActions("workBook", ["loadWorkbooks"]),
    ...mapGetters("workBook", [
      "getWorkBookFilter",
      "getWorkBooks",
      "getLoading",
    ]),
    workBooksList() {
      if (this.print) {
        return this.getWorkBookFilter(
          this.searchTitle,
          this.searchAuthor,
          this.searchlanguage,
          this.searchCategory,
          this.searchPrice1,
          this.searchPrice2,
          this.arrangeBy
        );
      } else {
        return this.getWorkBooks;
      }
    },
  },
  methods: {
    loadData() {
      this.loadWorkbooks;
    },
  },
  created() {
    this.loadData();
  },
};
</script>
