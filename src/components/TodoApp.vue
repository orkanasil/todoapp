<template>
    <div class="container rounded-5 bg-light shadow-lg p-5" style="width: 500px;">
        <div class="mb-4 d-flex justify-content-between">
            <CustomInput v-model:value="inputText" />
            <CustomButton class="proceed" @click="addToList">Add to List</CustomButton>
        </div>
        <ul class="list-group">
            <ListItem v-for="(listItem, index) in getList" :key="index" :listItem="listItem" :isEditing="isEditing"
                :tempId="tempId" @delete-from-list="deleteFromList($event)" @edit-item="editItem($event)"
                @updated-item="updatedItem($event)" />
        </ul>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import ListItem from "./ListItem.vue"
import CustomButton from "./ui-components/CustomButton.vue";
import CustomInput from "./ui-components/CustomInput.vue";
import { mapGetters, mapActions } from 'vuex';

export default {
    components: {
        ListItem,
        CustomButton,
        CustomInput
    },
    data() {
        return {
            inputText: '',
            updateInput: '',
            isEditing: false,
            tempId: '',
        }
    },
    computed: {
        ...mapGetters(['getList'])
    },
    methods: {
        ...mapActions(['insertListItem', 'deleteListItem', 'updateListItem']),
        addToList() {
            const uid = uuidv4();
            if (this.inputText.length <= 0) {
                alert('Input can not be empty!')
            }
            else {
                this.insertListItem({
                    id: uid,
                    text: this.inputText
                })
                this.inputText = ''
                console.log('is add item functional')
            }

        },
        deleteFromList(index) {
            this.deleteListItem(index, 1)
            console.log('is delete funtional');
        },
        editItem(listItem) {

            const { id } = listItem
            this.isEditing = true,
                this.tempId = id
            console.log('is edit item functional');
        },
        updatedItem(newListItem) {
            this.updateListItem(newListItem)
            this.isEditing = false;
            this.tempId = '';
            console.log('bu nerede başliyor?');
        },

    }
}
</script>

<style scoped></style>