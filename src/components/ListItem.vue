<template>
    <li class="list-group-item mt-4 border ">
        <div v-if="isEditing && tempId === listItem.id" class="d-flex align-items-center justify content between w-100">
            <CustomInput v-model:value="listItemText" />
            <CustomButton class="update ms-4" @click="onChange">Update</CustomButton>
        </div>
        <template v-else>
            <div class="d-flex align-items-center justify content between w-100">
                {{ listItem.text }}
                <CustomButton class="remove ms-auto" @click="$emit('deleteFromList', listItem.index)">Remove
                </CustomButton>
                <CustomButton class="edit ms-2" @click="$emit('editItem', listItem)">Edit</CustomButton>
            </div>
        </template>
    </li>
</template>

<script>
import CustomButton from "./ui-components/CustomButton.vue"
import CustomInput from "./ui-components/CustomInput.vue"
export default {
    props: ['listItem', 'isEditing', 'tempId'],
    components: {
        CustomButton,
        CustomInput
    },
    data() {
        return {
            listItemText: ''
        }
    },
    methods: {
        onChange() {

            this.$emit('updatedItem', {
                id: this.listItem.id,
                text: this.listItemText,
            })

        }
    }
}



</script>

<style scoped></style>