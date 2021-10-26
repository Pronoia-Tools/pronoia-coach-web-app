<template>
  <node-view-wrapper class="draggable-item">
    <div
      class="drag-handle"
      contenteditable="false"
      draggable="true"
      data-drag-handle
    />
    <!-- <node-view-content class="content" /> -->
    <!-- <span class="label">Vue Component</span> -->

    <div class="content">
      <div class="col-span-2 flex gap-4 justify-end flex-wrap">
        <FontAwesomeIcon v-if="!editable" class="cursor-pointer" :icon="myEdit" @click="toggleEditable" />
        <FontAwesomeIcon v-else class="cursor-pointer" :icon="mySave" @click="handleSave" />
        <!-- <FontAwesomeIcon class="cursor-pointer mr-1" :icon="myTrash" /> -->
      </div>
      <div v-if="question">
          <div class="flex justify-start items-center text-xl gap-2">
              <label v-bind:id="`Question-${question.id}`">Question:</label>
              <input v-if="editable" type="text" class="border border-gray-500 pl-1 pr-1 rounded" v-model="question.question">
              <span v-else class="border border-gray-500 bg-gray-200 rounded pl-1 pr-1 text-left">{{question.question}}</span>
          </div>
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
      <!-- <div v-else>
        non editable
      </div> -->
    </div>
  </node-view-wrapper>
</template>

<script>
import { NodeViewWrapper, nodeViewProps } from '@tiptap/vue-3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faEye, faTrash, faSave } from '@fortawesome/free-solid-svg-icons'
import PronoiaAPI from "../../../api/PronoiaAPI";

export default {
  components: {
    NodeViewWrapper,
    FontAwesomeIcon
  },
  data(){
    return{
      myEdit: faEdit, 
      myEye: faEye, 
      myTrash: faTrash,
      mySave: faSave,

      editable: false,
      question: null,
    }
  },

  props: nodeViewProps,

  methods: {
    toggleEditable() {
      this.editable = !this.editable
    },
    async handleSave() {
      let response = await PronoiaAPI.put('/unit/'+this.node.attrs.unit_id+'/question/'+this.node.attrs.id, this.question);
      console.log(response)
      this.toggleEditable()
    },
  },
  async created() {
    let response = null
    if(this.node.attrs.id !== 0) {
      //Existing question
      response = await PronoiaAPI.get('/unit/'+this.node.attrs.unit_id+'/question/'+this.node.attrs.id );
    } else {
      //new question
      response = await PronoiaAPI.post('/unit/'+this.node.attrs.unit_id+'/question', {question: "New Question"});
    }

    if (!response) return;
    this.question = response.data

    if (this.node.attrs.id !== this.question.id) {
      this.updateAttributes({
        id: this.question.id
      })
    }
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