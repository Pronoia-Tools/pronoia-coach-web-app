<template>
  <node-view-wrapper class="draggable-item">
    <div
      v-if="editor.view.editable"
      class="drag-handle"
      contenteditable="false"
      draggable="true"
      data-drag-handle
    />
    <!-- <node-view-content class="content" /> -->
    <!-- <span class="label">Vue Component</span> -->

    <div class="content">
      <!-- <div class="col-span-2 flex gap-4 justify-end flex-wrap">
        <FontAwesomeIcon v-if="!editable" class="cursor-pointer" :icon="myEdit" @click="toggleEditable" />
        <FontAwesomeIcon v-else class="cursor-pointer" :icon="mySave" @click="handleSave" />
        <FontAwesomeIcon class="cursor-pointer mr-1" :icon="myTrash" /> -->
      <!-- </div> --> 
      <div v-if="question">
          <!-- <div class="flex justify-start items-center text-xl gap-2">
              <label v-bind:id="`Question-${question.id}`">Question:</label>
              <textarea v-if="editable" type="text" class="border border-gray-500 pl-1 pr-1 rounded w-full" v-model="question.question"></textarea>
              <span v-else class="border border-gray-500 bg-gray-200 rounded pl-1 pr-1 text-left">{{question.question}}</span>
          </div> -->
          <TextEditor :editableParent="editor.view.editable" :contentHandler="contentHandler" :editorChangedHandler="editorChangedHandler"></TextEditor>
          <!-- <div class="flex justify-center items-center text-xl gap-2">
              <label class=" w-32" for="author">{{ $t('workbook.workbook.edition') }}:</label>
              <div class="flex gap-2 w-full">
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.edition">
                  <option value="1" selected>1st</option>
                  <option value="2">2nd</option>
                  <option value="3">3ed</option>
                </select>
                <select name="Language" class="border border-gray-500 rounded px-2 py-2 w-full" v-model="workBook.language">
                  <option value="" selected >{{ $t('workbook.workbook.language') }}</option>
                  <option value="Spanish">{{$t("languages.spanish")}}</option>
                  <option value="English">{{$t("languages.english")}}</option>
                </select>
              </div>
          </div> -->
      </div>
      <div class="flex gap-x-5 mt-3 group" v-if="question && !editor.view.editable">
        <div class="relative flex-grow">
          <input type="text" class="border p-2 w-full" v-model="answer">
          <div class="cursor-pointer absolute right-2 top-3 w-5 h-5 text-gray-500 z-50" @click="deleteResponse">
            <ToolTipVue text="delete answer">
              <FontAwesomeIcon  :icon="myTimes"/>
            </ToolTipVue>
          </div>
        </div>
        <ButoomCustomVue @click="sendResponse" v-if="!serverAnswer">Send response</ButoomCustomVue>
        <ButoomCustomVue @click="updateResponse" v-else>Edit response</ButoomCustomVue>
      </div>
      <!-- <div v-else>
        non editable
      </div> -->
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faEye, faTrash, faSave, faTimes } from '@fortawesome/free-solid-svg-icons'

import TextEditor from "../../TextEditor/Views/TextEditor.vue"
import PronoiaAPI from "../../../api/PronoiaAPI";
import ButoomCustomVue from '../../../components/ButoomCustom.vue'
import Swall from "sweetalert2"
import ToolTipVue from '../../../components/ToolTip.vue';

export default {
  components: {
    NodeViewWrapper,
    FontAwesomeIcon,
    TextEditor,
    ButoomCustomVue,
    ToolTipVue
  },
  data(){
    return{
      myEdit: faEdit, 
      myEye: faEye, 
      myTrash: faTrash,
      mySave: faSave,
      myTimes:faTimes,

      editable: false,
      question: null,
      serverAnswer:null,
      answer: null
    }
  },

  props: nodeViewProps,

  methods: {
    toggleEditable() {
      this.editable = !this.editable
      // this.updateAttributes({
      //   isOpen: this.editable
      // })
    },
    contentHandler() {
      console.log("llamada")
      return JSON.parse(this.question.question).content
    },
    async editorChangedHandler(data) {
      console.log("editorChangedHandler", data)
      const response = await PronoiaAPI.put('/unit/'+this.node.attrs.unit_id+'/question/'+this.node.attrs.id, {question: data});
      console.log("response", response)

    },
    async handleSave() {
      let response = await PronoiaAPI.put('/unit/'+this.node.attrs.unit_id+'/question/'+this.node.attrs.id, this.question);
      console.log(response)
      this.toggleEditable()
    },
    async sendResponse(){
      try {
        console.log({response:this.answer})
        let response = await PronoiaAPI.post(`/answer/${this.node.attrs.id}`,{
          answer:this.answer
        });
        this.serverAnswer = response.data
        console.log(response) 
      } catch (error) {
        console.log({error})
        Swall.fire({
          icon: "error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text: error.response.data.message,
        });
      }
    },
    async updateResponse(){
      try {
        console.log({response:this.answer})
        let response = await PronoiaAPI.put(`/answer/${this.serverAnswer.id}`,{
          answer:this.answer
        });
        console.log(response)
      } catch (error) {
        console.log({error})
        Swall.fire({
          icon: "error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text: error.response.data.message,
        });
      }
    },
    async deleteResponse(){
      console.log({response:this.answer})
      try {
        let response = await PronoiaAPI.delete(`/answer/${this.serverAnswer.id}`,{
          answer:this.answer
        });
        console.log({response})
        this.answer = null
        this.serverAnswer = null
      } catch (error) {
        console.log({error})
        Swall.fire({
          icon: "error",
          title: `${this.$t("swallAlertGeneral.error")}`,
          text: error.response.data.message,
        });
      }
    },
    async loadAnswer(){
      let answer = await PronoiaAPI.get(`/answer/${this.node.attrs.id}`)
      console.log({answer})
      if (answer.data.answer) {
        this.serverAnswer = answer.data
        this.answer = answer.data.answer
      }
      console.log(answer)
    }
  },
  async created() {
    let response = null
    if(this.node.attrs.id !== 0) {
      //Existing question
      response = await PronoiaAPI.get('/unit/'+this.node.attrs.unit_id+'/question/'+this.node.attrs.id );
      // this.editable = false
    } else {
      //new question
      response = await PronoiaAPI.post('/unit/'+this.node.attrs.unit_id+'/question', {question: "New Question"});
      // this.editable = true
    }

    if (!response) return;
    this.question = response.data

    if (this.node.attrs.id !== this.question.id) {
      this.updateAttributes({
        id: this.question.id
      })
    }
    console.log(this.node.attrs.isOpen)
    // this.editable = this.node.attrs.isOpen

    this.loadAnswer()
  }
}
</script>

<style lang="scss">
.draggable-item {
  display: flex;
  padding: 0.5rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  background: white;
  box-shadow:
    0 0 0 1px rgba(0, 0, 0, 0.05),
    0px 10px 20px rgba(0, 0, 0, 0.1),
  ;

  .drag-handle {
    flex: 0 0 auto;
    position: relative;
    width: 1rem;
    height: 1rem;
    top: 0.3rem;
    margin-right: 0.5rem;
    cursor: grab;
    background-image: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 16"><path fill-opacity="0.2" d="M4 14c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zM2 6C.9 6 0 6.9 0 8s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0-6C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>');
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }

  .content {
    flex: 1 1 auto;
  }
}
</style>