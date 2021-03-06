<template>
    <div>
        <div class="flex flex-row justify-end bg-gray-200">
            <div class="flex flex-row pr-2">
                <Menu :menuItems="menuItemsHeader" :clickHandler="menuItemsClick"></Menu>
            </div>
        </div>
        <Tree :value="workBookData" :ondragend="dragEnd">
            <template v-slot="{node, index, path, tree}" >
                <div class="flex flex-row justify-between cursor-pointer" 
                    :key=index
                    :class="[node.type === 'content' && node.id === unitSelected ? 'bg-green-50' : 'non']"
                    > 
                    <!-- DATA -->
                    <div class="flex flex-row flex-grow" >
                        <div v-if ="node.children && node.children.length > 0 && node.type === 'section'" @click="tree.toggleFold(node, path)">
                                <font-awesome-icon v-if = "node.$folded" :icon="myFolderPlus" />
                                <font-awesome-icon v-else :icon="myFolderOpen" />    
                        </div>
                        <div v-else>
                            <div v-if = "node.type === 'content'"> 
                                <font-awesome-icon :icon="myBookOpen" />
                            </div>
                            <div v-else>
                                <font-awesome-icon :icon="myFolder" />
                            </div>
                        </div>
                        
                        <div class="pl-1 flex-grow" @click="itemClick(node)">
                            {{node.text}}
                        </div>
                    </div>

                    <!-- actions -->
                    <Menu v-if = "node.type === 'section'" :menuItems="menuItemsNode" :clickHandler="menuItemsClick" :context="{node, index, path, tree}"></Menu>
                    <Menu v-if = "node.type === 'content'" :menuItems="menuItemsContent" :clickHandler="menuItemsClick" :context="{node, index, path, tree}"></Menu>
                    
            
                </div>
            </template>
        </Tree>
    </div>
</template>

<script>
import 'he-tree-vue/dist/he-tree-vue.css'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faPlus, faTrash, faBookOpen, faFolderOpen, faFolderPlus } from '@fortawesome/free-solid-svg-icons'
import { faFolder }  from '@fortawesome/free-regular-svg-icons'
import {Tree, Fold, Draggable} from 'he-tree-vue'
import Menu from '../../../components/Menu.vue'

export default {
    components: {
        Tree: Tree.mixPlugins([Fold, Draggable]), 
        Menu,
        FontAwesomeIcon
    },
    props: {
        workBookData: {
            type: Array,
            required: true,
        },
        addHandler: {
            type: Function,
            required: true,
        },
        removeHandler: {
            type: Function,
            required: true,
        },
        editHandler: {
            type: Function,
            required: true,
        },
        unitSelected: {
            type: Number,
            required: true,
        },
        clickHandler: {
            type: Function,
            required: true,
        },
        dragEndHandler: {
            type: Function,
            required: true,
        },
    },
    setup() {
        const handleSelection = (selectedItem) => {
            console.log(selectedItem);
        };
        return {
            handleSelection,
        };
    },
    data(){
        return{
            myEdit:faEdit,
            myPlus:faPlus, 
            myTrash:faTrash,
            myBookOpen: faBookOpen,
            myFolder: faFolder,
            myFolderOpen: faFolderOpen,
            myFolderPlus: faFolderPlus,
            items: [
                { name: "New Section", slug: "new_section" },
                { name: "New Content", slug: "new_content" }
            ],
            menuItemsHeader: [
                { name: "New Section", icon: faPlus},
                { name: "New Content", icon: faPlus}
            ],
            menuItemsNode: [
                { name: "New Section", icon: faPlus},
                { name: "New Content", icon: faPlus},
                { name: "Edit Name", icon: faEdit},
                { name: "Remove", icon: faTrash}
            ],
            menuItemsContent: [
                { name: "Edit Name", icon: faEdit},
                { name: "Remove", icon: faTrash}
            ]
        }
    },
    methods:{
        menuItemsClick(menuItem, context) {
            if(!context) {
                context = {
                    node: null,
                    path: null
                }
            }
            switch(menuItem.name) {
                case "New Section":
                    this.add(context.node, 'section')
                    break;
                case "New Content":
                    this.add(context.node, 'content')
                    break;
                case "Edit Name":
                    this.edit(context.node, context.path)
                    break;
                case "Remove":
                    this.remove(context.node, context.path)
                    break;
                default:
                    console.log('default:' + menuItem.name)
                    // code block
            }
            return true
        },
        itemClick(node){
            this.clickHandler(node)
        },
        add(node, type) {
            this.addHandler(node, type)
        },
        edit(node, path) {
            console.log('edit')
            this.editHandler(node, path)
        },
        remove(node, path) {
            this.removeHandler(node, path)
        },
        dragEnd(tree, store) {
            this.dragEndHandler(tree, store)
        }
    },
}
</script>
