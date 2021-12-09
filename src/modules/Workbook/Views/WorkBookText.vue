<template>

  <div class="overflow-hidden">

    <div id="container" class="flex">

      <!-- SIDEBAR -->
      <div id="sidebar" 
      class="absolute top-0 left-0 h-full transition-all duration-500 flex-shrink-0 z-50 bg-white
      lg:relative"  
      :class="isSidebarOpen" 
      v-if="openSideBar">
        
        <ButoomCustomVue class=" absolute right-0 top-0 visible lg:hidden" @click="toggleSideBar">X</ButoomCustomVue>
        <!-- GO BACk -->
        <div class="p-5 pl-3 cursor-pointer flex items-center gap-2" @click="$router.push({name:'workbook',params:{idWorkBook:idWorkBook}})">
          <FontAwesomeIcon :icon="myArrowLeft"></FontAwesomeIcon>
          <h1>{{ $t('workbook.workbookText.bookDetails') }}</h1>
        </div>

        <!-- TABLE OF CONTENTS -->
        <div class="transition-all border border-black w-64" :class="isSidebarOpen">
          <div class="w-full h-7 flex justify-between items-center px-3 cursor-pointer" @click="toggleTableContent">
            <span>{{ $t('workbook.workbookText.contentTable') }}</span>
            <FontAwesomeIcon :icon="myAngleDown" v-if="openTableContent"></FontAwesomeIcon>
            <FontAwesomeIcon :icon="myAngleUp" v-else></FontAwesomeIcon>
          </div>
          <div v-if="workBook && openTableContent" class="h-full text-black text-left" :class="isSidebarOpen">
            <a v-for="(content,index) in getContentTable" :key="index" :href="`#${content.id}`" @click="gotoSection(content)" class="block hover:bg-paleLogo" :class="content.classes">{{content.content}}</a>
          </div>
        </div>   
        <!-- IMAGE GALLERY -->
        <div class=" lg:hidden transition-all border border-black w-full ">
          <div class="w-full h-7 flex justify-between items-center px-3 cursor-pointer" @click="toggleImageLibrary">
            <span>Image Library</span>
            <FontAwesomeIcon :icon="myAngleDown" v-if="openImageLibrary"></FontAwesomeIcon>
            <FontAwesomeIcon :icon="myAngleUp" v-else></FontAwesomeIcon>
          </div>

          <div v-show="openImageLibrary" class=" overflow-hidden transition-all" >
            <div class="flex flex-wrap justify-around border border-black gap-2 overflow-auto h-32 overflow-x-hidden" >
              <ToolTipVue v-for="(image, index) in imageLibrary" :key="index"  :text="$t('workbook.workbookText.addToEditor')" class=" w-16 h-16 border border-myLightBlue object-cover cursor-pointer">
              <img   
                :src="image" alt="Galery image" 
                @click="clipboard(image)"
              >
              </ToolTipVue>
            </div>
            <input type="file" @change="onSelectedImage" multiple ref="imageSelector" v-show="false">
            <ButoomCustomVue class="m-2" @click="$refs.imageSelector.click()">{{$t('workbook.workbookText.addImages')}}</ButoomCustomVue>
          </div>  
        </div>

        <!-- WORKBOOK STRUCTURE -->
        <!-- <div class="transition-all border border-black h-full w-64">
          <div class="w-full h-7 flex justify-between items-center px-3 cursor-pointer" @click="toggleUnitLibrary">
            <span>Structure? Library</span>
            <FontAwesomeIcon :icon="myAngleDown" v-if="openUnitLibrary"></FontAwesomeIcon>
            <FontAwesomeIcon :icon="myAngleUp" v-else></FontAwesomeIcon>
          </div>
          <div v-show="openUnitLibrary" class="pl-1">
            <WorkbookStructure :workBookData="treeData" :addHandler="treeAddNode" :removeHandler="treeRemoveNode" :editHandler="treeEditNode" :unitSelected="unitSelected" :clickHandler="changeUnit" :dragEndHandler="changeStructure"></WorkbookStructure>
          </div>
        </div> -->
        
      </div>
      <button @click="toggleSideBar" class="p-0 pt-2 rounded hover:bg-opacity-70 h-10">
        <FontAwesomeIcon v-if="!sidebarOpen" :icon="myChevronLeft" class="p-2 text-5xl bg-myPurple rounded-r z-50"></FontAwesomeIcon>
        <FontAwesomeIcon v-else :icon="myChevronRight" class="p-2 text-5xl bg-myPurple rounded-r z-50"></FontAwesomeIcon>
        <!-- <font-awesome-icon v-if="!sidebarOpen" :icon="myChevronRight" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple rounded-r z-50" @click="toogleSidebarOpen"/>
      <font-awesome-icon v-else :icon="myChevronLeft" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple z-50" @click="toogleSidebarOpen"/> -->
      
      </button>  
      <!-- <button class="mr-1 h-10 my-1 px-4 py-2 border-b border-black flex justify-between items-center p-2" @click="toggleSideBar">
        <FontAwesomeIcon v-if="!sidebarOpen" :icon="myChevronLeft"></FontAwesomeIcon>
        <FontAwesomeIcon v-else :icon="myChevronRight" ></FontAwesomeIcon>
      </button>

      <div class="flex-grow relative">    
      <font-awesome-icon v-if="!sidebarOpen" :icon="myChevronRight" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple rounded-r z-50" @click="toogleSidebarOpen"/>
      <font-awesome-icon v-else :icon="myChevronLeft" class="absolute top-3 left-0 p-2 text-5xl bg-myPurple z-50" @click="toogleSidebarOpen"/>
      <router-view></router-view> -->
      <!-- </div> -->
      <!-- MAIN -->
      <div id="content" class="h-screen flex flex-col px-2">
        <div id="editor" class="h-full flex flex-col pb-12">
          <!-- Menu Bar -->
          <div v-if="editor" class="flex gap-2 flex-wrap border-t border-b border-border bg-400 items-start px-2 py-1 z-40" :class="fixed">
            <div class="flex items-center gap-5">
              <ButtonGroupVue>
                <ButtonAppVue @click="updateCurrentWorkbookHanlder">
                  {{ $t('workbook.workbookText.save') }}
                </ButtonAppVue>
                <ButtonAppVue @click="toogglePreview">
                  {{ $t('workbook.workbookText.preview') }}
                </ButtonAppVue>
                <ButtonAppVue @click="goToRead">
                  <!-- {{ $t('workbook.workbookText.preview') }} -->
                  read
                </ButtonAppVue>
              </ButtonGroupVue>


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
              <div>
                <ButtonGroupVue customText="Add">
                  <ButtonAppVue @click="editor.commands.setQuestion({unit_id: unitSelected, isOpen: true})">
                    Questions ?
                  </ButtonAppVue>
                </ButtonGroupVue>
              </div>

          </div>
          <!--Editor --> 
          <div id="editor-text" class="flex-grow overflow-auto z-0">

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
            <editor-content :editor="editor" class="m-2 mt-3" spellcheck="true" @keydown="editorChanged"/>
            
          </div>
        </div>

        <!-- <QuestionsListVue :unitSelected="unitSelected" :idWorkbook="idWorkBook"/> -->
      </div>
      <button @click="toggleGalerySideBar" class="p-0 pt-2 rounded hover:bg-opacity-70 h-10 hidden lg:block">
        <FontAwesomeIcon v-if="openSideBarGalery" :icon="myChevronLeft" class="p-2 text-5xl bg-myPurple rounded-l z-50"></FontAwesomeIcon>
        <FontAwesomeIcon v-else :icon="myChevronRight" class="p-2 text-5xl bg-myPurple rounded-l z-50"></FontAwesomeIcon>
      </button>

      <div id="sidebar-galery" class="hidden top-0 right-0 h-full transition-all duration-500 flex-shrink-0 z-40 bg-white overflow-hidden 
      lg:block lg:mt-0"  :class="isSidebarGaleryOpen">
        <ButoomCustomVue class="absolute left-0 top-0 visible lg:hidden" @click="toggleGalerySideBar">X</ButoomCustomVue>
        
        <!-- IMAGE LIBRARY -->
        <div class="transition-all border border-black h-full w-full mt-10 lg:mt-0">
          <div class="w-full h-7 flex justify-between items-center px-3 cursor-pointer" @click="toggleImageLibrary">
            <span>Image Library</span>
            <FontAwesomeIcon :icon="myAngleDown" v-if="openImageLibrary"></FontAwesomeIcon>
            <FontAwesomeIcon :icon="myAngleUp" v-else></FontAwesomeIcon>
          </div>
          <div v-show="openImageLibrary" class="overflow-auto resize-y flex flex-col" >
            <span class="px-3 font-bold italic border border-b-0 border-black">click to add</span>
            <div class=" flex-grow flex flex-wrap justify-around border border-black border-t-0 gap-2 gap-y-1 overflow-auto overflow-x-hidden" >
              <ToolTipVue v-for="(image, index) in imageLibrary" :key="index"  :text="$t('workbook.workbookText.addToEditor')" class=" w-16 h-16 border border-myLightBlue object-cover cursor-pointer">
              <img   
                :src="image" alt="Galery image" 
                @click="clipboard(image)"
              >
              </ToolTipVue>
            </div>
            <input type="file" @change="onSelectedImage" multiple ref="imageSelector" v-show="false">
            <ButoomCustomVue class="m-2" @click="$refs.imageSelector.click()">{{$t('workbook.workbookText.addImages')}}</ButoomCustomVue>

          </div>  
        </div>
        <DropZone @drop.prevent="onDropedImages" />
      </div>
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
import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import {Toast} from '@/components/Toast.js'
import { mapGetters, mapActions, mapMutations } from 'vuex'
import DropZone from "@/components/DropZone.vue";


import Question from "../../Question/Helpers/QuestionExtensionEditor"
import { handleFileUploadOnFirebaseStorage } from '../Helpers/uploadImage'

// import QuestionsListVue from '../Components/QuestionsList.vue'
// import WorkbookStructure from '../Components/WorkbookStructure.vue'

// import ButtonEditMoreGroup from '../../../components/ButtonEditMoreGroup.vue';
import ButtonAppVue from '../../../components/ButtonApp.vue';
import ButtonGroupVue from '../../../components/ButtonGroup.vue';
import ToolTipVue from '../../../components/ToolTip.vue'


export default {
  components: {
    // ButtonEditMoreGroup,
    ButtonAppVue,
    EditorContent,
    FontAwesomeIcon,
    // FloatingMenu,
    ButoomCustomVue,
    ButtonGroupVue,
    DropZone,
    ToolTipVue
    // QuestionsListVue,
    // WorkbookStructure,
  },
  props: {
    idWorkBook: {
      type: String,
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
      sidebarOpen:false,
      openSideBar: true,
      openSideBarGalery: false,
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
    }
  },
  computed:{
    ...mapGetters("image", ["getImages"]),
    ...mapGetters("auth", ["getUserAuth","getCustomTokenAuthFirebase"]),
    ...mapGetters("workBook",["getWorkBookById", "getWorkBookByIdWithUnits"]),
    imageLibrary(){
      return this.getImages
    },
    isSidebarOpen(){
      return this.sidebarOpen?"text-transparent invisible w-1":" w-64 visible"
    },
    isSidebarGaleryOpen(){
      return this.openSideBarGalery?"text-transparent w-0":" text-black w-64 "
    },
    getContentTable(){
      var titles = [];
      if (!this.workBook.units) return titles

      if(this.workBook.units.length<=this.unitSelectedIndex) return titles

      
      let unit = this.workBook.units[this.unitSelectedIndex]
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
            content.id=elementEditor.content[0].text,
            content.type = "heading"
            titles.push(content);
          }else if(elementEditor.type === "Question"){
            let content = {}
            content.classes = "pl-2 font-extrabold"
            content.content="Question"
            content.id=`Question-${elementEditor.attrs.id}`
            content.type = "Question"
            titles.push(content);
          }
        })
      }
      // let questions ={}
      // questions.classes = "text-center font-bold"
      // questions.type = "heading"
      // questions.content = `questions`
      // titles.push(questions);

      
      return titles;
    },
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
    ...mapActions("image",[
      "loadImageLibrary",
      "uploadImages"]),
    ...mapMutations("image",[
      "setImages"]),
    toggleSideBar() {
      this.sidebarOpen = !this.sidebarOpen
    },
    toggleGalerySideBar() {
      this.openSideBarGalery = !this.openSideBarGalery
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
    async toogglePreview(){
      await this.updateCurrentWorkbook()
      let route = this.$router.resolve({ name:"workbook-rich-text-preview" });
      window.open(route.href);
      // this.preview = !this.preview
    },
    async goToRead(){
      this.$router.push({ name:"workbook-rich-text-read" });
      // this.preview = !this.preview
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
      this.editor.chain().focus().setImage({ src: image }).run()
      navigator.clipboard.writeText(image)
    },
    async addImage() {
      const { value: url } = await Swal.fire({
        title: this.$t('workbook.workbookText.alerts.addImage.title') ,
        input: 'text',
        inputLabel: this.$t('workbook.workbookText.alerts.addImage.inputLabel'),
        inputPlaceholder: this.$t('workbook.workbookText.alerts.addImage.inputPlaceholder')
      })
      if (url) {
        //   const { value: width } = await Swal.fire({
        //   title: this.$t('workbook.workbookText.alerts.addImage.widthImage.title'),
        //   input: 'radio',
        //   inputOptions: {
        //     "full":"full",
        //     "1/2":"1/2",
        //     "1/3":"1/3",
        //     "1/4":"1/4",
        //   },
        //   inputValidator: (value) => {
        //     if (!value) {
        //       return this.$t('workbook.workbookText.alerts.addImage.widthImage.validatorMessage')
        //     }
        //   }
        // })
        // if (width) {
          // Swal.fire({ html: `You selected: ${width}` })
          this.editor.chain().focus().setImage({ src: url }).run()
        // }
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
    async onSelectedImage(event){
      const files = event.target.files
      new Swal({
        title: this.$t('swallAlertGeneral.wait'),
        allowOutsideClick:false
      })
      Swal.showLoading()
      // console.log({images})
      // const res = await this.uploadImages(images)
      // console.log(res)
      // console.log({res})

      
    // 1. If no file, return
      if (files.length === 0) return [];

      // 2. Create an array to store all download URLs
      let fileUrls = [];

      // 3. Loop over all the files
      for (var i = 0; i < files.length; i++) {
          // 3A. Get a file to upload
          const file = files[i];

          // 3B. handleFileUploadOnFirebaseStorage function is in above section
          const downloadFileResponse = await handleFileUploadOnFirebaseStorage({email:this.getUserAuth.user.email,file:file});
          
          // 3C. Push the download url to URLs array
          fileUrls.push(downloadFileResponse);
      }
      this.setImages(fileUrls)
      // console.log(  );

      // if(res){
        Toast.fire({
          icon: 'success',
          text: this.$t('swallAlertGeneral.saved')
        })
      // }else{
      //   Toast.fire({
      //     icon: 'error',
      //     text: this.$t('swallAlertGeneral.error')
      //   })
      // }
      // this.loadWorkBook(this.idWorkBook)
    },
    async onDropedImages(e){
      const files = e.dataTransfer.files
      console.log(e.dataTransfer.files)
      new Swal({
        title: this.$t('swallAlertGeneral.wait'),
        allowOutsideClick:false
      })
      Swal.showLoading()
      // 1. If no file, return
      if (files.length === 0) return [];
      // 2. Create an array to store all download URLs
      let fileUrls = [];
      // 3. Loop over all the files
      for (var i = 0; i < files.length; i++) {
          // 3A. Get a file to upload
          const file = files[i];
          // 3B. handleFileUploadOnFirebaseStorage function is in above section
          const downloadFileResponse = await handleFileUploadOnFirebaseStorage({email:this.getUserAuth.user.email,file:file});
          // 3C. Push the download url to URLs array
          fileUrls.push(downloadFileResponse);
      }
      this.setImages(fileUrls)
      Toast.fire({
        icon: 'success',
        text: this.$t('swallAlertGeneral.saved')
      })
    },

    // Saving
    handleQuestionSave(){
      console.log("questionsave")
    },
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

    // Methodss for tree. It was structure, future will be library? + Structure?
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
      
    },

    // Load Data methods
    async loadWorkBook(){
      let workBookSelected = await this.getWorkBookById(this.idWorkBook) 
      if (!workBookSelected){
        this.$router.push({name:"no-workbook"})
      }

      if (!workBookSelected.units || workBookSelected.units.length < 1) {
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
        console.log(this.unitSelected)
        this.editor.commands.setContent(this.workBook.units[this.unitSelectedIndex].contents)
      }
    },
    async loadData() {
      if (this.getImages.length === 0) {
        try {
          await this.loadImageLibrary({email:this.getUserAuth.user.email,customTokenAuthFirebase:this.getCustomTokenAuthFirebase})
        } catch (error) {
          Swal.fire({
            icon:"error",
            title: `${this.$t("swallAlertGeneral.error")}`,
            text:error
          })
        }
      }
    },
  },
  // Mounted loads workbook
  mounted() {
    if (window.innerWidth<1024){
      this.sidebarOpen=true
    }
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
      editable:true
    });
    this.loadWorkBook()
  },
  beforeUnmount() {
    this.editor.destroy()
  },
  // Loads data - Image Library
  created(){
    this.loadData() 
  },
  watch:{
    idWorkBook(){
        this.loadWorkBook()
    },
    unitSelected(){
        this.loadWorkBook()
    },
  }
}
</script>

<style lang="scss">
@use "sass:math";
// .index{
//   direction: rtl;

// }
// ::-webkit-scrollbar {
//   width: 10px;
// }

// /* Track */
// ::-webkit-scrollbar-track {
//   background: #f1f1f1; 
// }
 
// /* Handle */
// ::-webkit-scrollbar-thumb {
//   background: #2D9BF0; 
// }

// /* Handle on hover */
// ::-webkit-scrollbar-thumb:hover {
//   background: #1e679e; 
// }
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