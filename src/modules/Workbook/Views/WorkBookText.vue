<template>
  <!-- HEADER --> 
  <div class="">
    <div id="container" class="flex">

      <div id="sidebar" class="h-full">
        <div class="p-5 pl-3 cursor-pointer flex items-center gap-2" @click="$router.push({name:'workbook',params:{idWorkBook:idWorkBook}})">
          <FontAwesomeIcon :icon="myArrowLeft"></FontAwesomeIcon>
          <h1>{{ $t('workbook.workbookText.bookDetails') }}</h1>
        </div>
        <!-- SIDEBAREXTRA -->
        <div class="transition-all border border-black h-full" :class="isSidebarOpen">
          <div class="h-1/4 flex flex-wrap justify-around border border-black">
            <img 
              v-for="(image, index) in imagesArray" 
              :key="index" 
              :src="image" alt="image workbook" 
              class="w-20 h-20 border border-myLightBlue"
              @click="clipboard(image)"
            >
          </div>
          <!-- <div v-if="workBook && openTableContent" class="h-full text-black text-left">
            <a v-for="(content,index) in getContentTable" :key="index" :href="`#${content.content}`" @click="gotoSection(content)" class="block hover:bg-paleLogo" :class="content.classes">{{content.content}}</a>
          </div> -->
        </div>
        <!-- SIDE tree -->
        <div class="pl-1">
          <WorkbookStructure :workBookData="treeData" :addHandler="treeAddNode" :removeHandler="treeRemoveNode" :editHandler="treeEditNode" :unitSelected="unitSelected" :clickHandler="changeUnit" :dragEndHandler="changeStructure"></WorkbookStructure>
        </div>
        
      </div>

      <div id="content" class="h-screen flex flex-col pl-10 pr-10">
        <div id="editor" class="h-1/2 flex flex-col">
          <!-- Menu Bar -->
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
              <!-- <ButoomCustomVue @click="updateCurrentWorkbookAddSection" class="mr-1">
                {{ $t('workbook.workbookText.addSection') }}
              </ButoomCustomVue> -->
              <ButoomCustomVue @click="updateCurrentWorkbook" class="mr-1">
                {{ $t('workbook.workbookText.save') }}
              </ButoomCustomVue>
              <ButoomCustomVue @click="toogleSidebarOpen">
                <FontAwesomeIcon v-if="openTableContent" :icon="myChevronRight"/>
                  <FontAwesomeIcon v-else :icon="myChevronLeft"/>
                  Menu
                </ButoomCustomVue>
            </div>
            
          </div>

          <!--Editor --> 
          <div class="flex-grow overflow-auto z-0">
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
            <editor-content :editor="editor" class="m-2 mt-3" spellcheck="false" @keydown="editorChanged"/>
            
          </div>

          
        </div>

        <QuestionsListVue :unitSelected="unitSelected" :idWorkbook="idWorkBook"/>
      </div>
    </div>

  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {faBold,faItalic,faUnderline,faStrikethrough,faQuoteLeft,faCode,faListOl,faList,faUndo,faRedo,faImage,faChevronLeft,faChevronRight,faAlignLeft,faAlignRight,faAlignCenter,faAlignJustify,faFilm,faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { Editor, EditorContent } from '@tiptap/vue-3'
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
import QuestionsListVue from '../Components/QuestionsList.vue'
import WorkbookStructure from '../Components/WorkbookStructure.vue'

export default {
  components: {
    EditorContent,
    FontAwesomeIcon,
    // FloatingMenu,
    ButoomCustomVue,
    QuestionsListVue,
    WorkbookStructure,
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
      myArrowLeft:faArrowLeft,
      
      editor: null,
      openTableContent:true,
      imagesArray:[
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355540/oarli2auqa71pbyu5gcu.ico",
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355578/qrgrpfyaybctx2zhvldk.png"
      ],
      workBook:null,
      units:null,
      unitSelected:0,
      unitSelectedIndex:0,

      treeData: [],
      saveInterval:null,
    }
  },
  computed:{
    ...mapGetters("workBook",["getWorkBookById", "getWorkBookByIdWithUnits"]),
    isSidebarOpen(){      
      // return `${this.windowTop < 180?"h-screen absolute right-1 top-0":"h-4/5 fixed top-14"} ${this.openTableContent?`text-white right-0 `:`-right-full hidden`}` 
      return this.openTableContent?" w-64  ":" w-0 "
    },
    getContentTable(){
      var titles = [];
      
      // console.log({"sections":this.workBook.sections})
      if (!this.workBook.units) {
        return titles
      }
      this.workBook.units.forEach(unit => {
        let newUnit ={}
        newUnit.classes = "text-center font-bold"
        newUnit.type = "horizontalRule"
        newUnit.content = unit.name
        newUnit.sectionNumber = unit.id
        titles.push(newUnit);

        if(unit.contents && unit.contents.content) {
        unit.contents.content.forEach(elementEditor => {
          if(elementEditor.type === "heading"){
            let content = {}
            switch (elementEditor.attrs.level) {
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
            content.content=elementEditor.content[0].text,
            content.type = "heading"
            titles.push(content);
          }
        })
        }
        let questions ={}
        questions.classes = "text-center font-bold"
        questions.type = "heading"
        questions.content = `questions`
        titles.push(questions);
      });
      
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
    ...mapActions("workBook",[
      "loadWorkBookUnits", 
      "updateWorkbookUnit", 
      "updateWorkbookStructure",
      "createWorkBookUnit",
      //non used 
      "updateWorkbookSection",
      "updateWorkbookAddSection"]),
    editorChanged(){
      
      if (this.saveInterval) {
        clearInterval(this.saveInterval)
      }
      // autosave every 3 min after the user stop typing 
      this.saveInterval = setTimeout(() => this.updateCurrentWorkbook() , 90000);
      
    },
    gotoSection(section){
      if (section.type === "horizontalRule") {
        // console.log(section)
        this.unitSelected = section.sectionNumber
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
      // console.log(this.editor.getHTML())
      // console.log(this.editor.getJSON())
      this.updateCurrentWorkbook()
    },
    async addImage() {
      const { value: url } = await Swal.fire({
        title: this.$t('workbook.workbookText.alerts.addImage.title') ,
        input: 'text',
        inputLabel: this.$t('workbook.workbookText.alerts.addImage.inputLabel'),
        inputPlaceholder: this.$t('workbook.workbookText.alerts.addImage.inputPlaceholder')
      })
      if (url) {
         const { value: width } = await Swal.fire({
          title: this.$t('workbook.workbookText.alerts.addImage.widthImage.title'),
          input: 'radio',
          inputOptions: {
            "full":"full",
            "1/2":"1/2",
            "1/3":"1/3",
            "1/4":"1/4",
          },
          inputValidator: (value) => {
            if (!value) {
              return this.$t('workbook.workbookText.alerts.addImage.widthImage.validatorMessage')
            }
          }
        })
        if (width) {
          // Swal.fire({ html: `You selected: ${width}` })
          this.editor.chain().focus().setImage({ src: url,class:`w-${width}` }).run()
        }
      }
    },
    async addVideo() {
      const { value: url } = await Swal.fire({
        title: this.$t('workbook.workbookText.alerts.addVideo.title'),
        input: 'text',
        inputLabel: this.$t('workbook.workbookText.alerts.addVideo.inputLabel'),
        inputPlaceholder: this.$t('workbook.workbookText.alerts.addVideo.inputPlaceholder')
      })
      if (url) {
        this.editor.chain().focus().setIframe({ src: url }).run()
      }
    },
    toogleSidebarOpen(){
      this.openTableContent = !this.openTableContent
    },
    async loadWorkBook(){
      let workBookSelected = await this.getWorkBookById(this.idWorkBook) 
      if (!workBookSelected){
        this.$router.push({name:"no-workbook"})
      }

      if (!workBookSelected.units) {
        console.log('no units loaded')
        workBookSelected = await this.loadWorkBookUnits(workBookSelected)
      }

      this.editor.commands.clearContent()

      this.workBook = workBookSelected
      if (this.editor && this.workBook) {
        if(this.workBook.structure && this.workBook.structure.tree) {
          this.treeData = this.workBook.structure.tree
        } else {
          this.treeData = [{text: 'node 1', type:'section'}, {text: 'node 2', type:'section', children: [{text: 'node 2-1', type:'section'}]}, {text:'unit', type:'content'}];
        }
        if (this.unitSelected === 0) {
          this.unitSelectedIndex = 0;
          this.unitSelected = this.workBook.units[this.unitSelectedIndex].id       
        }
        // console.log(this.workBook)
        // console.log(this.workBook.units)
        // console.log(this.unitSelected)
        // console.log(this.unitSelectedIndex)
        console.log(this.treeData)
        this.editor.commands.setContent(this.workBook.units[this.unitSelectedIndex].contents)
      }
    },
    async updateCurrentWorkbook(){
      new Swal({
        title: this.$t('swallAlertGeneral.wait'),
        allowOutsideClick:false
      })
      Swal.showLoading()

      this.workBook.units[this.unitSelectedIndex].contents = this.editor.getJSON();
      await this.updateWorkbookUnit([this.workBook, this.unitSelectedIndex])

      Toast.fire({
        icon: 'success',
        text: `workbook ${this.$t('swallAlertGeneral.updated')}`
      })
      // Swal.fire(this.$t('swallAlertGeneral.wait'), "entrada actualizada",'success')
    },
    // async updateCurrentWorkbookAddSection(){
    //   new Swal({
    //     title: this.$t('swallAlertGeneral.wait'),
    //     allowOutsideClick:false
    //   })
    //   Swal.showLoading()

    //   await this.updateWorkbookAddSection({idWorkBook:this.idWorkBook})

    //   Toast.fire({
    //     icon: 'success',
    //     text: this.$t('swallAlertGeneral.updated')
    //   })
    //   // Swal.fire("Actualizado", "entrada actualizada",'success')
    // },
    async changeStructure(){
      // (tree, store)
      // console.log(tree)
      // console.log(store)
      // console.log('scjage')
      // console.log(this.treeData)
      // console.log(this.treeData[0])
      // console.log(this.$data.treeData)
      // console.log(this.$data.treeData[0])
      await this.updateWorkbookStructure([this.workBook, this.treeData])
    },
    async changeUnit(node){
      if(node.type === 'content') {
        let tempIndex = this.workBook.units.findIndex(x => x.id === node.id)

        if(tempIndex === undefined) {
          console.log('not found')
        } else {
          if(this.unitSelected !== tempIndex){
            await this.updateCurrentWorkbook()
            this.unitSelected = node.id
            this.unitSelectedIndex = tempIndex
          }
        }
      }
    },
    async treeAddNode(node, type) {
      const { value: title } = await Swal.fire({
        title: 'Enter the title:',
        input: 'text',
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        },
        showCancelButton: true,
      })

      if (title) {
        let newNode = {text: title, type: type}
        let newUnit = {}
        if(type === 'content') {
          const unit = {
            title: title
          }
          newUnit = await this.createWorkBookUnit([this.workBook, unit])
          this.workBook.units.push(newUnit)
          newNode.id = newUnit.id    
          
        }

        if(!node) {
          this.treeData.push(newNode)
        } else {
          if (node.children) {
            node.children.push(newNode)
          }
          else {
            node.children = [newNode]
          }
        }

        await this.updateWorkbookStructure([this.workBook, this.treeData])

        if(type === 'content') {
          this.unitSelected = newUnit.id   
          this.unitSelectedIndex = this.workBook.units.findIndex(x => x.id === this.unitSelected)
        }

        // 
      }
    },
    async treeEditNode(node) {
      const { value: title } = await Swal.fire({
        title: 'Enter the title:',
        input: 'text',
        inputValue: node.text,
        inputAttributes: {
          autocapitalize: 'off',
          autocorrect: 'off'
        },
        inputValidator: (value) => {
          if (!value) {
            return 'You need to write something!'
          }
        },
        showCancelButton: true,
      })

      if (title && title !== node.text) {
        node.text = title
        await this.updateWorkbookStructure([this.workBook, this.treeData])
      }
    },
    treeRemoveNode(node, path) {
      Swal.fire({
        title: this.$t("swallAlertGeneral.confirmDelete.title"),
        text: 'Are you shure you want to delete ' +node.text ,
        icon: 'warning',
        showDenyButton: true,
        confirmButtonText: this.$t("swallAlertGeneral.confirmDelete.confirmButtonText"),
        denyButtonText: this.$t("swallAlertGeneral.confirmDelete.denyButtonText"),
      }).then(async (result) => {
        if (result.isConfirmed) {
          if (path.length>0) {

            let parentNode = this.treeData
            let index = path[0]
            let toDelete = parentNode[index]
            path.shift()

            if (path.length>0) {
              path.forEach((subPath) => {
                parentNode = toDelete
                index = subPath
                toDelete = parentNode.children[index]
              })
              parentNode.children.splice(index, 1)
            } else {
              parentNode.splice(index, 1)
            }

            await this.updateWorkbookStructure([this.workBook, this.treeData])

            if(node.type === 'content' && this.unitSelected === node.id) {
              await this.updateCurrentWorkbook()
              // select another one
              // this.unitSelected = newUnit.id   
              // this.unitSelectedIndex = this.workBook.units.findIndex(x => x.id === this.unitSelected)
            }
            
          }
        } 
      })
      
    }
  },

  mounted() {
    // console.log("mounted")
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
    });
    this.loadWorkBook()
  },
  beforeUnmount() {
    this.editor.destroy()
  },
  // created(){
    
  //   // console.log("created")
  // },
  watch:{
    idWorkBook(){
        this.loadWorkBook()
    },
    unitSelected(){
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