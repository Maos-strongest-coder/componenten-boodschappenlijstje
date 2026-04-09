<script setup>
import {computed} from 'vue';
import {useRoute} from 'vue-router';
import {getGroceryById, updateGrocery} from '../store';
import GroceryForm from '../components/GroceryForm.vue';

const route = useRoute();

const grocery = computed(() => getGroceryById(route.params.id));

const handleSubmit = updated => {
    updateGrocery(updated);
};
</script>

<template>
    <h2>Edit</h2>

    <GroceryForm v-if="grocery" :grocery="grocery" @submit="handleSubmit" />
</template>
