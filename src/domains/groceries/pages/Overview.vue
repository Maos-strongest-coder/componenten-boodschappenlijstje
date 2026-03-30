<script setup>
import {ref} from 'vue';
import GroceriesTable from '../components/GroceriesTable.vue';

const products = ref([
    {name: 'Rijst', price: 1.0, quantity: 0},
    {name: 'Broccoli', price: 0.99, quantity: 0},
    {name: 'Koekjes', price: 1.2, quantity: 0},
    {name: 'Noten', price: 2.99, quantity: 0},
]);

const addProduct = product => {
    products.value.push(product);
};
</script>

<template>
    <h2>Overview</h2>

    <GroceriesTable :products="products" @addProduct="addProduct" />
</template>
