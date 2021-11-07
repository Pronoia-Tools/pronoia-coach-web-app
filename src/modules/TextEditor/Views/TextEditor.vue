<template>
    <div id="editor" class="flex flex-col">

        <!-- Menu Bar -->
        <div v-if="editor && this.myeditable" class="flex gap-2 flex-wrap border-t border-b border-border bg-400 px-2 py-1 z-40" :class="fixed">
        

            <div class="flex items-center gap-5">
                     <!-- <ButtonGroupVue> -->
              <ButtonAppVue @click="updateContent">
                {{ $t('workbook.workbookText.save') }}
              </ButtonAppVue>
<!-- </ButtonGroupVue> -->


</div>
            <button @click="editor.chain().focus().undo().run()">
            <FontAwesomeIcon :icon="myUndo"></FontAwesomeIcon>
            </button>
            <button class="mr-5" @click="editor.chain().focus().redo().run()">
            <FontAwesomeIcon :icon="myRedo"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <FontAwesomeIcon :icon="myBold"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            <FontAwesomeIcon :icon="myItalic"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
            <FontAwesomeIcon :icon="myUnderline"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
            <FontAwesomeIcon :icon="myStrikethrough"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
            <FontAwesomeIcon :icon="myQuoteLeft"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
            <FontAwesomeIcon :icon="myCode"></FontAwesomeIcon>
            </button>

            <button @click="editor.chain().focus().setParagraph().run()" :class="{ 'is-active': editor.isActive('paragraph') }">
            paragraph
            </button>

            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            H1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            H2
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            H3
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 4 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }">
            H4
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 5 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }">
            H5
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 6 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }">
            H6
            </button>

            <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
            <FontAwesomeIcon :icon="myListOl"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
            <FontAwesomeIcon :icon="myList"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
            <FontAwesomeIcon :icon="myCode"></FontAwesomeIcon>
            </button>
            <button @click="addImage">
            <FontAwesomeIcon :icon="myImage"></FontAwesomeIcon>
            </button>
            <button @click="addVideo">
            <FontAwesomeIcon :icon="myFilm"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }">
            <FontAwesomeIcon :icon="myAlignLeft"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().setTextAlign('center').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
            <FontAwesomeIcon :icon="myAlignCenter"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().setTextAlign('right').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
            <FontAwesomeIcon :icon="myAlignRight"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().setTextAlign('justify').run()" :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
            <FontAwesomeIcon :icon="myAlignJustify"></FontAwesomeIcon>
            </button>

            <button @click="editor.chain().focus().setHorizontalRule().run()">
            ___
            </button>
            <!-- <button @click="editor.commands.setQuestion({unit_id: unitSelected, isOpen: true})">
            Q
            </button> -->

        </div>
        <div v-else>
          <ButtonAppVue @click="toggelEditable">
                Edit
              </ButtonAppVue>
            <div v-if="editor" class="editor-container">
                <div class="editor-content" v-html="editor.getHTML()"></div>
            </div>
        </div>
        
        <!-- </div> -->

        <!--Editor --> 
        <div v-if="this.myeditable" class="flex-grow overflow-auto z-0">

        <!-- FLOATING MENU --> 
        <!-- <floating-menu :editor="editor" v-if="editor" class=" bg-black bg-opacity-10 z-0">
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
            H1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
            H2
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
            H3
            </button>
            <button @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
            <FontAwesomeIcon :icon="myBold"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
            <FontAwesomeIcon :icon="myItalic"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleUnderline().run()" :class="{ 'is-active': editor.isActive('underline') }">
            <FontAwesomeIcon :icon="myUnderline"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
            <FontAwesomeIcon :icon="myStrikethrough"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
            <FontAwesomeIcon :icon="myQuoteLeft"></FontAwesomeIcon>
            </button>
            <button @click="editor.chain().focus().setHorizontalRule().run()">
            ___
            </button>
        </floating-menu> -->

        <!-- EDITOR ITSELF -->
        <editor-content :editor="editor" class="m-2 mt-3" spellcheck="false" @keydown="editorChanged"/>
        
        </div>

        
    </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faAngleDown,faAngleUp,faBold,faItalic,faUnderline,faStrikethrough,faQuoteLeft,faCode,faListOl,faList,faUndo,faRedo,faImage,faChevronLeft,faChevronRight,faAlignLeft,faAlignRight,faAlignCenter,faAlignJustify,faFilm,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

// import { Editor, EditorContent, FloatingMenu } from '@tiptap/vue-3'
import { Editor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Image from "../Helpers/Image"
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Iframe from "../Helpers/iframe"
import Heading from "../Helpers/heading"

import Swal from "sweetalert2"
// import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import {Toast} from '@/components/Toast.js'
import { mapGetters } from 'vuex'

import Question from "../../Question/Helpers/QuestionExtensionEditor"

import ButtonAppVue from '../../../components/ButtonApp.vue';
// import ButtonGroupVue from '../../../components/ButtonGroup.vue';

// import QuestionsListVue from '../Components/QuestionsList.vue'
// import WorkbookStructure from '../Components/WorkbookStructure.vue'

export default {
  components: {
    EditorContent,
    FontAwesomeIcon,
    // FloatingMenu,
    // ButoomCustomVue,
    ButtonAppVue,
    // ButtonGroupVue
    // QuestionsListVue,
    // WorkbookStructure,
  },
  props: {
    editable: {
      type: Boolean,
      default: false,
    },
    contentHandler: {
        type: Function,
        required: true,
    },
    editorChangedHandler: {
        type: Function,
        required: true,
    },

  },
  data() {
    return {
      // Icons
      myBold:faBold,
      myItalic:faItalic,
      myUnderline:faUnderline,
      myStrikethrough:faStrikethrough,
      myQuoteLeft:faQuoteLeft,
      myCode:faCode,
      myListOl:faListOl,
      myList:faList,
      myUndo:faUndo,
      myRedo:faRedo,
      myImage:faImage,
      myChevronLeft:faChevronLeft,
      myChevronRight:faChevronRight,
      myAlignLeft:faAlignLeft,
      myAlignRight:faAlignRight,
      myAlignCenter:faAlignCenter,
      myAlignJustify:faAlignJustify,
      myFilm:faFilm,
      myArrowLeft:faArrowLeft,
      myAngleDown:faAngleDown,      
      myAngleUp:faAngleUp,
      
      // Menus state
      openSideBar: true,
      openTableContent: true,
      openImageLibrary: true,
      openUnitLibrary: true,

      // Data Objects
      editor: null,
      workBook:null,
      unitSelected:0,
      unitSelectedIndex:0,

      // future structure
      treeData: [],

      //helpers
      saveInterval:null,
      myeditable: false,
    }
  },
  computed:{
    ...mapGetters("image", ["getImages"]),
    ...mapGetters("workBook",["getWorkBookById", "getWorkBookByIdWithUnits"]),
  },
  methods:{
    toggleSideBar() {
      this.openSideBar = !this.openSideBar
    },
    toggleTableContent() {
      this.openTableContent = !this.openTableContent
    },
    toggleImageLibrary() {
      this.openImageLibrary = !this.openImageLibrary
    },
    toggleUnitLibrary() {
      this.openUnitLibrary = !this.openUnitLibrary
    },


    // Saving
    editorChanged(){  
      if (this.saveInterval) {
        clearInterval(this.saveInterval)
      }
      // autosave every 1.5 min after the user stop typing 
      this.saveInterval = setTimeout(() => this.updateCurrentWorkbook() , 90000);
      
    },
    async updateCurrentWorkbook() {
      this.workBook.units[this.unitSelectedIndex].contents = this.editor.getJSON();
      console.log(this.editor.getJSON())
      await this.updateWorkbookUnit([this.workBook, this.unitSelectedIndex])
    },
    async updateCurrentWorkbookHanlder(){
      new Swal({
        title: this.$t('swallAlertGeneral.wait'),
        allowOutsideClick:false
      })
      Swal.showLoading()

      await this.updateCurrentWorkbook()

      Toast.fire({
        icon: 'success',
        text: `workbook ${this.$t('swallAlertGeneral.updated')}`
      })
      // console.log(this.editor.getJSON())
      // console.log(this.workBook)
    },
    updateContent() {
      this.editorChangedHandler(this.editor.getJSON())
      this.toggelEditable()
    },
    toggelEditable() {
      this.myeditable = !this.myeditable;
    },
    async loadData() {
        let contents = await this.contentHandler()
        this.editor.commands.clearContent()
        this.editor.commands.setContent(contents)
        this.myeditable = this.editable
    },
  },
  // Mounted loads workbook
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
      content: ``,
    });
    this.loadData()
  },
  beforeUnmount() {
    this.editor.destroy()
  },
  // Loads data - Image Library
  created(){
    this.loadData() 
  },
}
</script>

<style lang="scss">
@use "sass:math";
.index{
  direction: rtl;

}
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #2D9BF0; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #1e679e; 
}
button{
  // background: blue;
  // width: 2.5rem;
  padding: 0.5em;
}



/* Basic editor styles */
.ProseMirror {
  
  padding: 0 1rem;
  min-height: 100vh !important;
  // background: red;
  border: none;
  &:focus{
    border: none;
  }
  > * + * {
    margin-top: 0.75em;
  }

  ol{
    list-style: circle;
  }
  ul{
    list-style: decimal;
  }
  ul,
  ol {
    padding: 0 1rem;
  }
  h1 {
    font-size: 3rem;
    font-weight: bold !important;
  }
  h2 {
    font-size: 2rem !important;
    font-weight: bold !important;
  }
  h3 {
    font-size: 1rem;
    font-weight: bold !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
    
  }

  code {
    background-color: rgba(#616161, 0.1);
    color: #616161;
  }

  pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: 0.8rem;
    }
  }

  img {
    // max-width: 33% !important;
    height: auto;
    margin: 0 auto;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0D0D0D, 0.1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0D0D0D, 0.1);
    margin: 2rem 0;
  }
  img {
    max-width: 100% ;
    height: auto ;

    &.ProseMirror-selectednode {
      outline: 3px solid #68CEF8 ;
    }
  }

  .iframe-wrapper {
  position: relative;
  padding-bottom: math.div(50,16)*9%;
  height: 0;
  overflow: hidden;
  width: 50%;
  height: auto;
  margin: 0 auto;

  &.ProseMirror-selectednode {
    outline: 3px solid #68CEF8;
  }

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
}
</style>