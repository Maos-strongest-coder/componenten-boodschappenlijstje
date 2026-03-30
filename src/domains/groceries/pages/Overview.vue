<script>
export default {
    methods: {
        goToOverview() {
            this.$router.push('/overview');
        },
    },
};

import {ref} from 'vue';

const products = ref([
    {name: 'Rijst', price: 1.0, quantity: 0},
    {name: 'Broccoli', price: 0.99, quantity: 0},
    {name: 'Koekjes', price: 1.2, quantity: 0},
    {name: 'Noten', price: 2.99, quantity: 0},
]);
</script>

<template>
    <h2>Overview</h2>
    <button @click="goToOverview">Go to Overview</button>
</template>
