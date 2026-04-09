<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import {getAllGroceries} from '../store';
import {computed} from 'vue';

const groceries = computed(() => getAllGroceries.value);
</script>

<template>
    <h2>Overview</h2>

    <GroceriesTable :groceries="groceries" />
</template>
