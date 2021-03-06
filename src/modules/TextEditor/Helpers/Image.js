'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');

const inputRegex = /!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\)/;
const Image = core.Node.create({
    name: 'image',
    defaultOptions: {
        inline: false,
        HTMLAttributes: {},
    },
    inline() {
        return this.options.inline;
    },
    group() {
        return this.options.inline ? 'inline' : 'block';
    },
    draggable: true,
    addAttributes() {
        return {
            src: {
                default: null,
            },
            alt: {
                default: null,
            },
            title: {
                default: null,
            },
            class:{
              default:null,
            }
        };
    },
    parseHTML() {
        return [
            {
                tag: 'img[src]',
            },
        ];
    },
    renderHTML({ HTMLAttributes }) {
        return ['img', core.mergeAttributes(this.options.HTMLAttributes, HTMLAttributes)];
    },
    addCommands() {
        return {
            setImage: options => ({ commands }) => {
              console.log(options)
                return commands.insertContent({
                    type: this.name,
                    attrs: options,
                });
            },
        };
    },
    addInputRules() {
        return [
            core.nodeInputRule(inputRegex, this.type, match => {
                const [, alt, src, title] = match;
                return { src, alt, title };
            }),
        ];
    },
});

exports.Image = Image;
exports.default = Image;
exports.inputRegex = inputRegex;
//# sourceMappingURL=tiptap-extension-image.cjs.js.map
