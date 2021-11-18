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
    ...mapGetters("auth",["getUserAuth"]),
    isAuthenticated() {
      return this.getUserAuth.user
    }
  },
  methods:{
    ...mapActions("workBook", ["loadWorkbooks"]),
    async loadWorkbook(){
      await this.loadWorkbooks();
      this.workbook = this.getWorkBookById(this.idWorkBook)  
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
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  watch: {
    isAuthenticated (state, oldState) {
      // Our fancy notification (2).
      console.log({state})
      console.log("-*----------------")
      console.log(oldState)
      if (state) {
        this.loadWorkbook()
      }
    }
  }

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
