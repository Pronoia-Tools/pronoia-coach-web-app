import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import TipTapResizebleImage from "../Components/TipTapResizebleImage.vue"

export default Node.create({
    name: 'vueComponent',

    group: 'block',

    atom: true,

    draggable:true,

    addAttributes() {
        return {
            src: {
                default: "",
            },
            width:{
                default:100
            },
            justify:{
                default:"center"
            }
        }
    },

    parseHTML() {
        return [
        {
            tag: 'vue-component-resizeble-Image',
        },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['vue-component-resizeble-Image', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(TipTapResizebleImage)
    },
    addCommands() {
        return {
            setImage: options => ({ commands }) => {
                console.log(options)
                return commands.insertContent({
                    type: this.name,
                    attrs: options,
                });
                // console.log(options)
                // return commands.setNode('vueComponent')
            },
        };
    },
})
