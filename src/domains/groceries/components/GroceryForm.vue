<script setup>
import {ref} from 'vue';

const emit = defineEmits(['submit']);

const newGrocery = ref({name: '', price: 0, quantity: 0});

const submitForm = () => {
    emit('submit', {...newGrocery.value});

    newGrocery.value = {name: '', price: 0, quantity: 0};
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model.trim="newGrocery.name" placeholder="Naam" />
        <input type="number" step="0.01" v-model="newGrocery.price" placeholder="Prijs" />
        <input type="number" v-model="newGrocery.quantity" placeholder="Hoeveelheid" />
        <button type="submit">Voeg toe</button>
    </form>
</template>
