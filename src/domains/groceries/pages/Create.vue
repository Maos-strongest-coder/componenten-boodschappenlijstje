<script setup>
import {ref} from 'vue';
import GroceryForm from '../components/GroceryForm.vue';
import {addGrocery} from '../store';

const grocery = ref({name: '', price: 0, quantity: 0});

const handleSubmit = newGrocery => {
    addGrocery(newGrocery);
    grocery.value = {name: '', price: 0, quantity: 0};
};
</script>

<template>
    <h2>Create</h2>

    <GroceryForm :grocery="grocery.value" @submit="handleSubmit" />
</template>
