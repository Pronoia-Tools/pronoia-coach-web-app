<template>
  <div class="w-full min-h-full">
    <SpinerVue v-if="getLoading"></SpinerVue>
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Image from "../Helpers/Image"
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Iframe from "../Helpers/iframe"
import Heading from "../Helpers/heading"
import Question from "../../Question/Helpers/QuestionExtensionEditor"
import { mapGetters, mapActions } from 'vuex'
import SpinerVue from '../../../components/Spiner.vue'

export default {
  components: {
    EditorContent,SpinerVue
  },
  props:{
    idWorkBook: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      editor: null,
      workbook: null
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById","getLoading"]),
  },
  methods:{
    ...mapActions("workBook", ["loadWorkbooks","loadWorkBookUnits"]),
    async loadWorkbook(){
      // await this.loadWorkbooks();
      
      this.workbook = this.getWorkBookById(this.idWorkBook)
      console.log(this.workbook)
     if (!this.workbook.units || this.workbook.units.length < 1) {
       console.log('no units loaded')
        this.workbook  = await this.loadWorkBookUnits(this.workbook)
      }
    this.editor.commands.setContent(this.workbook.units[0].contents.content)
    }
  },
  

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Typography,
        Image,
        Underline,
        Iframe,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        Heading,
        Question
      ],
      content: "",
      editable:false
    })

    this.loadWorkbook()

  },

  beforeUnmount() {
    this.editor.destroy()
  },

}
</script>

<style lang="scss">
/* Basic editor styles */
.ProseMirror {
  > * + * {
    margin-top: 0.75em;
  }
}
</style>
