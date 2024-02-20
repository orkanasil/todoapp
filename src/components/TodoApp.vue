<template>
    <div class="container rounded-5 bg-light shadow-lg p-5" style="width: 500px;">
        <div class="mb-4 d-flex justify-content-between">
            <input v-model="inputText" @keydown.enter="addToList" type="text">
            <button class="btn btn-primary" @click="addToList">Add to List</button>
        </div>
        <ul class="list-group">
            <li v-for="(listItem, index) in getList" :item="listItem" :key="index" class="list-group-item mt-4 border ">
                <div v-if="isEditing && id === listItem.id" class="d-flex align-items-center justify content between w-100">
                    <input type="text" v-model="updateInput">
                    <button class="btn btn-success ms-5" @click="updatedItem(newListItem)">Update</button>

                </div>
                <template v-else>
                    <div class="d-flex align-items-center justify content between w-100">
                        {{ listItem.text }}
                        <button class="btn btn-danger ms-auto " @click="deleteFromList(index)">Remove</button>
                        <button class="btn btn-warning ms-2 text-light" @click="editItem(listItem)">Edit</button>
                    </div>
                </template>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    data() {
        return {
            inputText: '',
            updateInput: '',
            isEditing: false,
        }
    },
    computed: {
        ...mapGetters(['getList'])
    },
    methods: {
        ...mapActions(['insertListItem', 'deleteListItem', 'updateListItem']),
        addToList() {
            this.insertListItem({
                text: this.inputText
            })
            this.inputText = ''
        },
        deleteFromList(index) {
            this.deleteListItem(index, 1)
        },
        editItem(listItem) {
            const { id } = listItem
            this.isEditing = true,
                this.id = id
        },
        updatedItem(newListItem) {
            this.updateListItem(newListItem)
            this.isEditing = false;
            this.id = ''
        },

    }
}
</script>

<style scoped></style>