<template>
  <!-- HEADER --> 
  <div class=" p-5 pl-20 flex justify-between items-center">
    <span>Book detail</span>
    <ButoomCustomVue @click="saveWoorkbook">Save</ButoomCustomVue>
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
    <editor-content :editor="editor" class="h-screen border border-black"/>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBold,faItalic,faUnderline,faStrikethrough,faQuoteLeft,faCode,faListOl,faList,faUndo,faRedo, } from '@fortawesome/free-solid-svg-icons'
import { Editor, EditorContent, FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'
import ButoomCustomVue from '../../../components/ButoomCustom.vue'

export default {
  components: {
    EditorContent,FontAwesomeIcon,FloatingMenu,ButoomCustomVue
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
      editor: null,
    }
  },
  methods:{
    saveWoorkbook(){
      console.log(this.editor.getHTML())
    }
  },

  mounted() {
    this.editor = new Editor({
      extensions: [
        StarterKit,Typography
      ],
      content: `
      `
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
}

/* Basic editor styles */
.ProseMirror {
  height: 100%;
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
    max-width: 100%;
    height: auto;
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

  
}
</style>