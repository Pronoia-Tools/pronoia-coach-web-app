'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var core = require('@tiptap/core');
var prosemirrorInputrules = require('prosemirror-inputrules');

const Heading = core.Node.create({
    name: 'heading',
    defaultOptions: {
        levels: [1, 2, 3, 4, 5, 6],
        HTMLAttributes: {},
    },
    content: 'inline*',
    group: 'block',
    defining: true,
    addAttributes() {
        return {
            level: {
                default: 1,
                rendered: false,
            },
        };
    },
    parseHTML() {
        return this.options.levels
            .map((level) => ({
            tag: `h${level}`,
            attrs: { level },
        }));
    },
    renderHTML({ node, HTMLAttributes }) {
        const hasLevel = this.options.levels.includes(node.attrs.level);
        const level = hasLevel
            ? node.attrs.level
            : this.options.levels[0];
            // console.log({node,HTMLAttributes})
        return ["a",{id:`${node.content.content[0].text}`},[`h${level}`, core.mergeAttributes(this.options.HTMLAttributes, HTMLAttributes), 0]];
    },
    addCommands() {
        return {
            setHeading: attributes => ({ commands }) => {
                if (!this.options.levels.includes(attributes.level)) {
                    return false;
                }
                return commands.setNode('heading', attributes);
            },
            toggleHeading: attributes => ({ commands }) => {
                if (!this.options.levels.includes(attributes.level)) {
                    return false;
                }
                return commands.toggleNode('heading', 'paragraph', attributes);
            },
        };
    },
    addKeyboardShortcuts() {
        return this.options.levels.reduce((items, level) => ({
            ...items,
            ...{
                [`Mod-Alt-${level}`]: () => this.editor.commands.toggleHeading({ level }),
            },
        }), {});
    },
    addInputRules() {
        return this.options.levels.map(level => {
            return prosemirrorInputrules.textblockTypeInputRule(new RegExp(`^(#{1,${level}})\\s$`), this.type, { level });
        });
    },
});

exports.Heading = Heading;
exports.default = Heading;
//# sourceMappingURL=tiptap-extension-heading.cjs.js.map
