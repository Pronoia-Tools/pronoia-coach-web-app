<template>
  <!-- HEADER --> 
  <div class="relative">
    <div class=" p-5 pl-20 flex justify-between items-center">
      <h1>Book detail</h1>
      
    </div>
    <div class="">
      <div v-if="editor" class="flex gap-2 flex-wrap border-t border-b border-border bg-400 justify-between px-2 py-1 z-40" :class="fixed">
        <div>
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
        </div>
        
        <div class="">
          <ButoomCustomVue @click="updateCurrentWorkbookAddSection" class="mr-1">
            Add section
          </ButoomCustomVue>
          <ButoomCustomVue @click="updateCurrentWorkbook" class="mr-1">
            Save
          </ButoomCustomVue>
          <ButoomCustomVue @click="toogleSidebarOpen">
            <FontAwesomeIcon v-if="openTableContent" :icon="myChevronRight"/>
              <FontAwesomeIcon v-else :icon="myChevronLeft"/>
              Menu
            </ButoomCustomVue>
        </div>
        
      </div>

      <div class="relative">
        <floating-menu :editor="editor" v-if="editor" class=" bg-black bg-opacity-10">
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
        </floating-menu>
        <editor-content :editor="editor" class="min-h-screen" spellcheck="false"/>

        <!-- SIDEBAREXTRA -->
        <div class="index transition-all duration-500 delay-200 bg-gray-100 border border-gray-600" :class="isSidebarOpen">
          <div class="h-2/6 w-64  flex flex-wrap justify-around border border-black">
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


      </div>
    </div>


  </div>
  
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBold,faItalic,faUnderline,faStrikethrough,faQuoteLeft,faCode,faListOl,faList,faUndo,faRedo,faImage,faChevronLeft,faChevronRight,faAlignLeft,faAlignRight,faAlignCenter,faAlignJustify,faFilm } from '@fortawesome/free-solid-svg-icons'

import { Editor, EditorContent, FloatingMenu  } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import Image from "../Helpers/Image"
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Iframe from "../Helpers/iframe"
import Heading from "../Helpers/heading"

import Swal from "sweetalert2"
import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import {Toast} from '@/components/Toast.js'
import { mapGetters,mapActions } from 'vuex'

export default {
  components: {
    EditorContent,
    FontAwesomeIcon,
    FloatingMenu,
    ButoomCustomVue
  },
  props: {
    idWorkBook: {
      type: String,
      requird: true,
    },
  },
  data() {
    return {
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
      
      editor: null,
      openTableContent:false,
      imagesArray:[
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355540/oarli2auqa71pbyu5gcu.ico",
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355578/qrgrpfyaybctx2zhvldk.png"
      ],
      windowTop:0,
      workBook:null,
      sectionSelected:0
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById"]),
    isSidebarOpen(){      
      return `${this.windowTop < 180?"h-screen absolute right-1 top-0":"h-4/5 fixed top-14"} ${this.openTableContent?`text-white right-0 `:`-right-full hidden`}` 
    },
    getContentTable(){
      var titles = [];
      
      console.log({"sections":this.workBook.sections})
      for(var i = 0; i < this.workBook.sections.length; i++){
          let content ={}
            
          content.classes = "bg-red-300 text-center font-bold"
          content.type = "horizontalRule"
          content.content = `section ${i+1}`
          content.sectionNumber = i
          titles.push(content);
          for(var j = 0; j < this.workBook.sections[i].content.length; j++){

            if(this.workBook.sections[i].content[j].type === "heading"){
              let content = {          }
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
         
       
      }
      return titles;
    },
    fixed(){
      if(this.windowTop > 180 ){
        return "fixed top-0 left-0 bg-blue-400 w-full"
      }
      return "" 
    }
  },
  methods:{
    ...mapActions("workBook",["updateWorkbookSection","updateWorkbookAddSection"]),
    gotoSection(section){
      if (section.type === "horizontalRule") {
        console.log(section)
        this.sectionSelected = section.sectionNumber
      }
    },
    clipboard(image){
      Toast.fire({
        icon: 'success',
        text: 'Copied into the clipboard '
      })
      navigator.clipboard.writeText(image)
    },
    saveWoorkbook(){
      console.log(this.editor.getHTML())
      console.log(this.editor.getJSON())
    },
    async addImage() {
      const { value: url } = await Swal.fire({
        title: 'Image URL',
        input: 'text',
        inputLabel: 'Your image IRL',
        inputPlaceholder: 'Enter your image IRL'
      })
      if (url) {
         const { value: color } = await Swal.fire({
          title: 'Select width',
          input: 'radio',
          inputOptions: {
            "full":"full",
            "1/2":"1/2",
            "1/3":"1/3",
            "1/4":"1/4",
          },
          inputValidator: (value) => {
            if (!value) {
              return 'You need to choose something!'
            }
          }
        })
        if (color) {
          // Swal.fire({ html: `You selected: ${color}` })
          this.editor.chain().focus().setImage({ src: url,class:`w-${color}` }).run()
        }
      }
    },
    async addVideo() {
      const { value: url } = await Swal.fire({
        title: 'Video URL',
        input: 'text',
        inputLabel: 'Your video IRL',
        inputPlaceholder: 'Enter your video IRL'
      })
      if (url) {
        this.editor.chain().focus().setIframe({ src: url }).run()
      }
    },
    toogleSidebarOpen(){
      this.openTableContent = !this.openTableContent
    },
    onScroll() {
      // console.log(window.top.scrollY)
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
    },
    async loadWorkBook(){
      let workBookSelected

      if (this.idWorkBook==="new") {
        workBookSelected = {
          title:"",
          published:new Date(),
          edition:1,
          language:"",
          price:"",
          currency:"",
          status:"Editable",
          author:"",
          tags:""
        }
      }else{
        console.log(this.idWorkBook)
        workBookSelected =await this.getWorkBookById(this.idWorkBook) 
        if (!workBookSelected){
          this.$router.push({name:"no-workbook"})
        }
      }
      this.editor.commands.clearContent()

      this.workBook = workBookSelected
      if (this.editor && this.workBook) {
        this.editor.commands.insertContent(this.workBook.sections[this.sectionSelected])
      }
    },
    async updateCurrentWorkbook(){
      new Swal({
        title: 'Espere por favor!',
        allowOutsideClick:false
      })
      Swal.showLoading()

      await this.updateWorkbookSection({json:this.editor.getJSON(),sectionSelected:this.sectionSelected,idWorkBook:this.idWorkBook})

      Swal.fire("Actualizado", "entrada actualizada",'success')
    },
    async updateCurrentWorkbookAddSection(){
      new Swal({
        title: 'Espere por favor!!',
        allowOutsideClick:false
      })
      Swal.showLoading()

      await this.updateWorkbookAddSection({idWorkBook:this.idWorkBook})

      Swal.fire("Actualizado", "entrada actualizada",'success')
    },
    
  },

  mounted() {
    console.log("mounted")
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
        Heading

      ],
      content: ``,
    }),
    this.loadWorkBook()
    window.addEventListener("scroll", this.onScroll)
  },
  beforeUnmount() {
    this.editor.destroy(),
    window.removeEventListener("scroll", this.onScroll)
  },
  created(){
    
    console.log("created")
  },
  watch:{
    idWorkBook(){
        this.loadWorkBook()
    },
    sectionSelected(){
        this.loadWorkBook()
    }
  }
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