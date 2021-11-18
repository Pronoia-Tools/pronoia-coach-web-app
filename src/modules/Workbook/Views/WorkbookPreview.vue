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
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById","getLoading"]),
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
    if (this.isAuthenticated) {
        this.loadWorkbook()
    }
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  watch: {
    isAuthenticated (state) {
      // console.log({state})
      // console.log("-*----------------")
      // console.log({oldState})
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
