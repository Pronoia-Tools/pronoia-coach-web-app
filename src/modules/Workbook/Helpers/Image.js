import { Node, mergeAttributes } from '@tiptap/core'
import { VueNodeViewRenderer } from '@tiptap/vue-3'
import Component from "../Components/Component.vue"

export default Node.create({
    name: 'vueComponent',

    group: 'block',

    atom: true,

    addAttributes() {
        return {
        src: {
            default: "https://static.remove.bg/remove-bg-web/194d453110e760e94498dbb94c5cfb329903342c/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
        },
        width:{
            default:300
        }
        }
    },

    parseHTML() {
        return [
        {
            tag: 'vue-component',
        },
        ]
    },

    renderHTML({ HTMLAttributes }) {
        return ['vue-component', mergeAttributes(HTMLAttributes)]
    },

    addNodeView() {
        return VueNodeViewRenderer(Component)
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
