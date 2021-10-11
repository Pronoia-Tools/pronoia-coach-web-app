<template>
    <div class="flex flex-col pr-2 relative whitespace-nowrap">
        <div class="w-2 cursor-pointer" @click="toggleOpen()" >
            <font-awesome-icon :icon="myDots" />
        </div>
        <div v-if="isOpen" class="flex flex-col absolute mt-6 bg-white z-10 border border-black cursor-pointer">
            <div class="flex flex-row pr-1 m-1 " v-for="item in menuItems" :key="item.name" @click="click(item)">
                <div class="pr-2">
                    <font-awesome-icon :icon=item.icon />
                </div>
                <div class="overflow-clip ">
                    {{item.name}}
                </div>
            </div>
        </div>
    </div>    
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faEdit, faPlus, faTrash, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

export default {
    components: {
        FontAwesomeIcon
    },
    props: {
        menuItems: {
            type: Array,
            required: true,
        },
        clickHandler: {
            type: Function,
            required: true,
        },
        context: {
            type: Object,
            required: false,
        }
        // removeHandler: {
        //     type: Function,
        //     required: true,
        // }
    },
    data(){
        return{
            isOpen: false,
            myEdit:faEdit,
            myPlus:faPlus, 
            myTrash:faTrash,
            myDots: faEllipsisV
        }
    },
    methods:{
        toggleOpen() {
            this.isOpen = !this.isOpen;
        },
        click(menuItem) {
            if(this.context) {
                this.clickHandler(menuItem, this.context)
            } else {
                this.clickHandler(menuItem, null)
            }
            this.toggleOpen()
        },
    },
}
</script>
