<template>
  <div class="border border-gray-600 h-screen overflow-auto">
    <div class="h-48 flex flex-wrap justify-around border border-black">
      <img
        v-for="(image, index) in imagesArray" 
        :key="index" 
        :src="image" alt="image workbook" 
        class="w-20 h-20 border border-myLightBlue"
        @click="clipboard(image)"
      >
    </div>
    <div v-if="workBook" class="overflow-y-auto overflow-scroll text-black text-left">
      <a v-for="(content,index) in getContentTable" :key="index" :href="`#${content.content}`" @click="gotoSection(content)" class="block hover:bg-paleLogo" :class="content.classes">{{content.content}}</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    idWorkBook: {
      type: String,
      requird: true,
    },
  },
  data(){
    return{
      workBook:null,
      imagesArray:[
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355540/oarli2auqa71pbyu5gcu.ico",
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355578/qrgrpfyaybctx2zhvldk.png"
      ],
    }
  },
  methods:{
    gotoSection(section){
      if (section.type === "horizontalRule") {
        // this.sectionSelected = section.sectionNumber
        // console.log(section)
        this.$router.push({name:'workbook-rich-text',params:{idWorkBook:this.idWorkBook,section:section.sectionNumber} })
      }
    },
    async loadIndex(){
      let workBookSelected
      workBookSelected =await this.getWorkBookById(this.idWorkBook) 
      this.workBook = workBookSelected
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById"]),
    getContentTable(){
      var titles = [];
      // console.log({"sections":this.workBook.sections})
      if (this.workBook.sections.length < 1) {
        return titles
      }

      for(var i = 0; i < this.workBook.sections.length; i++){
        let content ={}
        content.classes = "text-center font-bold"
        content.type = "horizontalRule"
        content.content = `${ this.$t('workbook.workbookText.section') } ${i+1}`
        content.sectionNumber = i
        titles.push(content);
        for(var j = 0; j < this.workBook.sections[i].content.length; j++){

          if(this.workBook.sections[i].content[j].type === "heading"){
            let content = {}
            switch (this.workBook.sections[i].content[j].attrs.level) {
              case 1:
                  content.classes = "pl-2 font-extrabold"
                break;
              case 2:
                  content.classes = "pl-6 font-bold"
                break;
              case 3:
                  content.classes = "pl-10 font-semibold"
                break;
            
              default:
                  content.classes = "pl-14 font-medium"
                break;
            }
            content.content=this.workBook.sections[i].content[j].content[0].text,
            content.type = "heading"
            titles.push(content);
          }
        }
        let question ={}
        question.classes = "text-left font-bold"
        question.type = "heading"
        question.content = `Questions`
        // question.sectionNumber = i
        titles.push(question);
      }
      return titles;
    },
  },
  mounted(){
    this.loadIndex()
  }
}
</script>

<style>

</style>