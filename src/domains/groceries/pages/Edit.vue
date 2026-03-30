<script>
export default {
    methods: {
        goToEdit() {
            this.$router.push('/edit');
        },
    },
};
</script>

<template>
    <h2>Edit</h2>
    <button @click="goToEdit">Go to Edit</button>
</template>
