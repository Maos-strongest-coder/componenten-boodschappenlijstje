<script setup>
import GroceriesTable from '../components/GroceriesTable.vue';
import {getAllGroceries} from '../store';
</script>

<template>
    <h2>Overview</h2>

    <GroceriesTable :groceries="getAllGroceries" />
</template>
