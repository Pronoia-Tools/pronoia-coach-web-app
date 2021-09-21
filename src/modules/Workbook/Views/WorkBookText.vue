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
        </div>
        
        <div class="">
          <ButoomCustomVue @click="saveWoorkbook" class="mr-1">
            Save
          </ButoomCustomVue>
          <ButoomCustomVue @click="toogleSidebarOpen">
            <FontAwesomeIcon v-if="openTableContent" :icon="myChevronRight"/>
              <FontAwesomeIcon v-else :icon="myChevronLeft"/>
              Menu
            </ButoomCustomVue>
        </div>
        
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
      <editor-content :editor="editor" class="h-screen" spellcheck="false"/>
    </div>

    <!-- SIDEBAREXTRA -->

    <div class="fixed h-screen transition-all duration-500 bg-gray-100 border border-gray-600" :class="isSidebarOpen">
      <div class="w-64 h-1/3  flex flex-wrap justify-around border border-black">
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
        <butoom-custom-vue @click="editor.commands.updateAttributes('heading', { level: 2 })">set</butoom-custom-vue>
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
import Image from '@tiptap/extension-image'
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Iframe from "../Helpers/iframe"

import ButoomCustomVue from '../../../components/ButoomCustom.vue'
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
      windowTop:0
    }
  },
  computed:{
    isSidebarOpen(){      
      return `${this.windowTop < 180?"right-0 top-44":"left-0 top-14"} ${this.openTableContent?`text-white invisible w-1 `:` w-64 visible `}` 
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
    },
    fixed(){
      if(this.windowTop > 180 ){
        return "fixed top-0 left-0 bg-blue-400 w-full"
      }
      return "" 
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
      console.log(this.editor.getHTML())
    },
    addImage() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setImage({ src: url }).run()
      }
    },
    addVideo() {
      const url = window.prompt('URL')

      if (url) {
        this.editor.chain().focus().setIframe({ src: url }).run()
      }
    },
    toogleSidebarOpen(){
      this.openTableContent = !this.openTableContent
    },
    onScroll() {
      console.log(window.top.scrollY)
      this.windowTop = window.top.scrollY /* or: e.target.documentElement.scrollTop */
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

      ],
      content: `
        <p><strong>Every flight begins with a fall.</strong></p><p><em>A ruler who hides behind paid executioners soon forgets what death is.</em></p><p><u>Hear my words, and bear witness to my vow. </u></p><p><s>Night gathers, and now my watch begins. It shall not end until my death I </s></p><p><code>shall take no wife, hold no lands, father no children. </code></p><pre><code>I shall wear no crowns and win no glory. I shall live and die at my post. </code></pre><ul><li><p>I am the sword in the darkness.</p></li><li><p>I am the watcher </p></li><li><p>on the walls. </p></li></ul><ol><li><p>I am the fire that burns </p></li></ol><ol><li><p>against the cold, </p></li></ol><ol><li><p>the light that brings the dawn</p></li></ol><p>The horn that wakes the sleepers, the shield that guards the realms of men. I pledge my life and honor to the Night’s Watch, for this night and all the nights to come.</p><img src="https://res.cloudinary.com/dtyjtokie/image/upload/v1630355540/oarli2auqa71pbyu5gcu.ico" alt="image workbook"><h1>LOREM 1</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales, nibh ac ullamcorper egestas, augue justo interdum erat, id placerat nisl urna in felis. Vestibulum commodo imperdiet dui. Nunc at lacinia purus. Sed dictum turpis ultricies ex convallis, eget scelerisque ex auctor. Nullam pretium urna in est condimentum facilisis. Aenean euismod est quam, vitae fermentum sapien lobortis a. Mauris vitae leo quis nisl volutpat egestas. Nullam dictum, leo vel convallis ultrices, urna nunc laoreet mi, ut ultricies lacus nisi in ligula. Pellentesque eleifend viverra nisi, non gravida neque sodales sed. Aliquam et tortor fringilla, dapibus massa quis, porttitor mauris. Pellentesque placerat varius mi, quis suscipit lectus convallis quis.</p><p>Integer sodales mauris justo, nec accumsan quam lacinia ut. Pellentesque sit amet metus aliquet nisl cursus ultricies quis ut libero. Nullam feugiat elit pulvinar volutpat facilisis. Ut interdum quam libero, quis maximus est imperdiet auctor. Aliquam suscipit, nunc nec gravida auctor, turpis sem eleifend nunc, ut tincidunt sapien odio in libero. Pellentesque nec posuere nisi. Sed auctor est a diam elementum bibendum. Sed luctus sodales mi sit amet malesuada. Mauris egestas ex mauris, vel congue urna commodo a. Sed scelerisque nisi malesuada, gravida felis vel, porta nisi.</p><p>Nullam eu orci accumsan, laoreet turpis vel, vestibulum neque. Proin et nulla vel ligula blandit convallis vel a lacus. Cras nisl tellus, cursus at blandit vitae, egestas vel odio. Pellentesque fermentum urna est, eget dapibus urna lacinia et. Vestibulum id leo quis nulla convallis tempus. Sed cursus, ex sed luctus mattis, augue enim aliquam purus, eget ornare dui ex sed dui. Sed luctus hendrerit porttitor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;</p><p>Nulla varius id augue sed tempor. Fusce interdum, nisi quis pellentesque scelerisque, mi sem porttitor urna, lobortis suscipit turpis urna id est. In rhoncus lacus vel felis congue tristique. Mauris tincidunt, tellus eget auctor feugiat, ante metus posuere justo, ac volutpat justo urna id urna. Cras ut urna vel turpis porta placerat. Sed ac facilisis arcu, id ornare est. Duis tincidunt tortor finibus lectus sollicitudin, quis mollis arcu malesuada. Praesent fringilla porta massa a hendrerit. Pellentesque maximus tincidunt augue, eget egestas enim consectetur nec. Etiam ac luctus massa. Cras ac libero egestas, ultricies diam in, luctus nulla. Proin at venenatis diam. Nulla commodo at nibh id posuere. Sed lobortis eleifend tortor, eget tincidunt quam aliquet in.</p><h2>LOREM 2</h2><p>Ut interdum auctor tristique. Ut eget erat et erat porttitor auctor. Nullam non congue nunc, iaculis aliquet quam. Sed ex odio, lacinia sed risus eget, cursus dapibus ipsum. Sed eleifend ante quis sagittis vulputate. Etiam consequat, turpis vel eleifend pulvinar, erat sem tristique orci, in viverra tellus libero et tortor. Etiam mollis ex nisl, quis congue metus efficitur in. Aliquam eget dignissim nunc. Phasellus sed enim at risus malesuada hendrerit. Sed ultricies luctus ante nec maximus. Pellentesque finibus ipsum quis tellus aliquet dignissim. Fusce a elit quis quam elementum sodales. Ut non orci vitae libero vestibulum mattis.</p><h2>LOREM 2.1</h2><p>Morbi sed lacus id erat blandit eleifend. Aliquam feugiat, risus vitae scelerisque sodales, massa diam lobortis tellus, at convallis odio nibh in est. Vestibulum quis commodo libero, vitae egestas massa. Aenean auctor mauris ut leo auctor hendrerit. Suspendisse imperdiet quam eu tortor fermentum, vel rhoncus ligula mollis. Pellentesque et lorem et quam tincidunt hendrerit in vitae augue. Vivamus purus nulla, convallis a leo vel, tincidunt tincidunt ligula. Ut a mattis eros. Curabitur semper, erat et lobortis egestas, tortor diam efficitur augue, quis tincidunt justo est quis risus.</p><p>Pellentesque malesuada condimentum interdum. Morbi malesuada, ligula non porta tempor, massa mi suscipit ante, a facilisis mi arcu at ipsum. Cras ultricies, leo vel aliquet semper, sem est porttitor est, et egestas nisi lacus eget metus. Maecenas non risus at purus ultricies fringilla. Integer faucibus ut arcu id condimentum. Pellentesque sagittis ultricies orci, et laoreet nisl mattis sed. Quisque elementum fringilla justo, id dictum nulla. Fusce urna leo, sollicitudin vel nulla ut, hendrerit molestie enim. Donec sodales euismod odio, et molestie erat vulputate et. Nullam imperdiet sapien a lorem finibus, vitae cursus arcu viverra. Mauris velit augue, ultrices congue tristique eget, faucibus vel massa.</p><p>Aenean eget tellus tristique, tempus ante at, malesuada magna. Fusce molestie tempus augue sit amet lobortis. Curabitur sed mauris sed nulla molestie iaculis et in sem. Sed libero libero, interdum at nunc a, eleifend porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Sed in massa eleifend, eleifend magna et, scelerisque eros. Vivamus volutpat enim magna, aliquet interdum nisl gravida non.</p><h3>LOREM 2.1.1</h3><p>Phasellus eget augue vitae ipsum sodales facilisis. Donec imperdiet commodo venenatis. Donec eget lacus sed tortor laoreet finibus. Ut cursus lectus neque, at pellentesque arcu feugiat id. Etiam pellentesque neque vel neque venenatis placerat. Suspendisse porta at magna vitae pharetra. Ut porta volutpat est, a ullamcorper elit venenatis ut. Curabitur ut consequat est. Mauris non nisi rutrum, sollicitudin tellus id, pretium felis.</p><p>Suspendisse vitae massa convallis, scelerisque lectus nec, ultrices urna. Praesent ut sagittis erat. Nulla consequat imperdiet nibh, vel imperdiet justo pharetra id. Aliquam interdum vitae odio vel pretium. Sed sit amet augue eget metus aliquet ultrices. Mauris efficitur tristique lectus et fringilla. Maecenas a risus et leo ornare ultrices id in magna. In lacinia leo in nisi imperdiet ullamcorper. Ut ut leo a ante efficitur ultrices id non augue. Donec pretium lacus urna.</p><h1>IPSUM</h1><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales, nibh ac ullamcorper egestas, augue justo interdum erat, id placerat nisl urna in felis. Vestibulum commodo imperdiet dui. Nunc at lacinia purus. Sed dictum turpis ultricies ex convallis, eget scelerisque ex auctor. Nullam pretium urna in est condimentum facilisis. Aenean euismod est quam, vitae fermentum sapien lobortis a. Mauris vitae leo quis nisl volutpat egestas. Nullam dictum, leo vel convallis ultrices, urna nunc laoreet mi, ut ultricies lacus nisi in ligula. Pellentesque eleifend viverra nisi, non gravida neque sodales sed. Aliquam et tortor fringilla, dapibus massa quis, porttitor mauris. Pellentesque placerat varius mi, quis suscipit lectus convallis quis.</p><p><br></p>
      <iframe src="https://www.youtube.com/embed/XIMLoLxmTDw" frameborder="0" allowfullscreen></iframe>
      
      `,
    }),
    window.addEventListener("scroll", this.onScroll)
  },

  beforeUnmount() {
    this.editor.destroy(),
    window.removeEventListener("scroll", this.onScroll)
  },
}
</script>

<style lang="scss">
@use "sass:math";
button{
  // background: blue;
  // width: 2.5rem;
  padding: 0.5em;
}



/* Basic editor styles */
.ProseMirror {
  
  padding: 0 1rem;
  min-height: 100%;
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
    max-width: 33% !important;
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