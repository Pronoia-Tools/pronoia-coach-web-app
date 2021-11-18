<template>
  <div class="w-full min-h-full">

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

export default {
  components: {
    EditorContent,
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
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById"]),    
    ...mapActions("workBook", ["loadWorkbooks"]),
  },
  methods:{
    async loadWorkbook(){
      this.editor.commands.clearContent()
      await this.loadWorkbooks();
      console.log(this.idWorkBook)
      this.workbook = this.getWorkBookById(this.idWorkBook)  
      console.log(this.workbook.units[0].contents)
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
