import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Question from '../Views/Question.vue'

export default Node.create({
  name: 'Question',

  group: 'block',

  draggable: true,

  atom: true,

  addAttributes() {
    return {
      id: {
        default: 0,
      },
      unit_id: {
        default: 0,
      },
      isOpen: {
        default: false,
      },
    }
  },

  parseHTML() {
    return [
      {
        tag: 'question',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['question', mergeAttributes(HTMLAttributes)]
  },

  addNodeView() {
    return VueNodeViewRenderer(Question)
  },

  addCommands() {
      return {
          setQuestion: options => ({commands}) => {
              return commands.insertContent({
                  type: this.name,
                  attrs: options,
              })
          }
      }
  }
})