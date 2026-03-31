<script setup>
import GroceryForm from '../components/GroceryForm.vue';
import {addGrocery} from '../store';
</script>

<template>
    <h2>Create</h2>

    <GroceryForm @submit="addGrocery" />
</template>
