<template>
  <!-- HEADER --> 
  <div class="relative">
    <div class=" p-5 pl-20 flex justify-between items-center">
      <span>Book detail</span>
      <ButoomCustomVue @click="saveWoorkbook">
        Save
      </ButoomCustomVue>
      <ButoomCustomVue @click="toogleSidebarOpen">
        <FontAwesomeIcon v-if="openTableContent" :icon="myChevronRight"/>
        <FontAwesomeIcon v-else :icon="myChevronLeft"/>
        Menu
      </ButoomCustomVue>
    </div>
    <div >
      <div v-if="editor" class=" flex gap-2 flex-wrap border border-border">
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
        
      </div>

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
        <button @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
          bullet list
        </button>
      </floating-menu>
      <editor-content :editor="editor" class="px-10"/>
    </div>

    <!-- SIDEBAREXTRA -->

    <div class="absolute h-screen top-20 right-0 transition-all duration-500" :class="isSidebarOpen">
      <div class="w-80 h-1/3 bg-red-500 flex flex-wrap justify-around">
        <img 
          v-for="(image, index) in imagesArray" 
          :key="index" 
          :src="image" alt="image workbook" 
          class="w-20 h-20 border border-myLightBlue"
          @click="clipboard(image)"
        >
      </div>
      <div v-if="editor">
        <p v-for="(content,index) in getContentTable" :key="index" :class="content.classes">{{content.content}}<span></span></p>
      </div>
    </div>
  </div>
  
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBold,faItalic,faUnderline,faStrikethrough,faQuoteLeft,faCode,faListOl,faList,faUndo,faRedo,faImage,faChevronLeft,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Editor, EditorContent, FloatingMenu  } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import Image from '@tiptap/extension-image'
import {Toast} from '@/components/Toast.js'

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
      
      editor: null,
      openTableContent:false,
      imagesArray:[
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355540/oarli2auqa71pbyu5gcu.ico",
        "https://res.cloudinary.com/dtyjtokie/image/upload/v1630355578/qrgrpfyaybctx2zhvldk.png"
      ],
    }
  },
  computed:{
    isSidebarOpen(){
      return this.openTableContent?"text-white invisible w-1 bg-blue-300":" w-80 visible bg-red-300"
    },
    getContentTable(){
      var titles = [];
      // console.log(this.editor.getJSON().content)
      for(var i = 0; i < this.editor.getJSON().content.length; i++){
        if(this.editor.getJSON().content[i].type === "heading"){
          let content = {          }
          switch (this.editor.getJSON().content[i].attrs.level) {
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
          content.content=this.editor.getJSON().content[i].content[0].text,
            
          titles.push(content);
          
        }
      }
      return titles;
    }
  },
  methods:{
    clipboard(image){
      

      Toast.fire({
        icon: 'success',
        text: 'Copied into the clipboard '
      })

      navigator.clipboard.writeText(image)
    },
    saveWoorkbook(){
      console.log(this.editor.getJSON())
    },
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
    toogleSidebarOpen(){
      this.openTableContent = !this.openTableContent
    },
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Typography,
        Image
      ],
      content: `
        <h1>
          Hi there,
        </h1>
        <h2>
          Hi there,
        </h2>
        <h3>
          Hi there,
        </h3>
        <p>
          this is a <em>basic</em> example of <strong>tiptap</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
        </p>
        <ul>
          <li>
            That’s a bullet list with one …
          </li>
          <li>
            … or two list items.
          </li>
        </ul>
        <p>
          Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
        </p>
        <pre><code class="language-css">body {
  display: none;
}</code></pre>
        <p>
          I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around. Don’t forget to check the other examples too.
        </p>
        <blockquote>
          Wow, that’s amazing. Good work, boy! 👏
          <br />
          — Mom
        </blockquote>
      `,
      
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
button{
  // background: blue;
  // width: 2.5rem;
  padding: 0.5em;
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

/* Basic editor styles */
.ProseMirror {
  padding: 1rem;
  > * + * {
    margin-top: 0.75em;
  }

  ul,
  ol {
    padding: 0 1rem;
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
    max-width: 50% !important;
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

  
}
</style>