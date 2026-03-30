<script>
export default {
    methods: {
        goToCreate() {
            this.$router.push('/create');
        },
    },
};
</script>

<template>
    <h2>Create</h2>
    <button @click="goToCreate">Go to Create</button>
</template>
