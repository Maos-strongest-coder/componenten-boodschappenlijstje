<script setup>
import GroceriesTable from './components/GroceriesTable.vue';

const addProduct = product => {
    products.value.push(product);
};
</script>

<template>
    <router-link to="/create">Create</router-link>
    <router-link to="/overview">Overview</router-link>
    <router-link to="/edit">Edit</router-link>

    <main><router-view /></main>

    <GroceriesTable :products="products" @addProduct="addProduct" />
</template>
