<script setup>
import {ref, watch} from 'vue';

const props = defineProps({grocery: Object});

const emit = defineEmits(['submit']);

const formData = ref({name: '', price: 0, quantity: 0});

watch(
    () => props.grocery,
    newGrocery => {
        formData.value = {
            name: newGrocery?.name,
            price: newGrocery?.price,
            quantity: newGrocery?.quantity,
        };
    },
    {immediate: true},
);
const message = ref('');

const submitForm = () => {
    if (formData.value.name && formData.value.price > 0 && formData.value.quantity > 0) {
        const name = formData.value.name;

        emit('submit', {...formData.value, id: props.grocery?.id});

        formData.value = {name: '', price: 0, quantity: 0};

        message.value = `${name} toegevoegd`;
    } else {
        message.value = 'Controleer of je alles goed ingevuld hebt.';
    }
};
</script>

<template>
    <form @submit.prevent="submitForm">
        <input type="text" v-model.trim="formData.name" placeholder="Naam" />
        <input type="number" step="0.01" v-model="formData.price" placeholder="Prijs" />
        <input type="number" v-model="formData.quantity" placeholder="Hoeveelheid" />
        <button type="submit">Voeg toe</button>
    </form>

    <p v-if="message" style="color: red">{{ message }}</p>
</template>
