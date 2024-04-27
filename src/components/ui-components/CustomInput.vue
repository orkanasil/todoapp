<template>
    <input type="text" :value="value" @input="onInput">
</template>

<script>
export default {
    props: {
        value: {
            requried: true,
            type: String
        }
    },
    methods: {
        onInput() {
            this.$emit('update:value', event.target.value)
        }
    }
}
</script>

<style scoped></style>