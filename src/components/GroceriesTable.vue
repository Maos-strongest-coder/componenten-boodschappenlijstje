<script setup>
import {ref, computed} from 'vue';

const props = defineProps({
    products: Array,
});

const emit = defineEmits(['addProduct']);

const total = computed(() => {
    return props.products.reduce((sum, product) => {
        return sum + product.price * product.quantity;
    }, 0);
});

const newProductName = ref('');
const newProductPrice = ref('');

const addProduct = () => {
    if (newProductName.value && newProductPrice.value != NaN) {
        emit('addProduct', {name: newProductName.value, price: parseFloat(newProductPrice.value), quantity: 0});

        newProductName.value = '';
        newProductPrice.value = '';
    }
};
</script>

<template>
    <input type="text" v-model.trim="newProductName" placeholder="Product naam" />
    <input type="number" step="0.01" v-model="newProductPrice" placeholder="Prijs" />
    <button type="button" v-on:click="addProduct()">Voeg product toe</button>

    <table>
        <thead>
            <tr>
                <th>Product</th>
                <th>Prijs</th>
                <th>Hoeveelheid</th>
                <th>Subtotaal</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(product, index) in props.products" :key="index">
                <td>{{ product.name }}</td>
                <td>€ {{ product.price.toFixed(2) }}</td>
                <td><input type="number" min="0" v-model="product.quantity" /></td>
                <td>€ {{ (product.price * product.quantity).toFixed(2) }}</td>
            </tr>
            <tr>
                <td colspan="3"><b>Totaal</b></td>
                <td>€ {{ total.toFixed(2) }}</td>
            </tr>
        </tbody>
    </table>
</template>

<style>
* {
    font-family: sans-serif;
}

table {
    border-collapse: collapse;
    text-align: left;
}

table .productQuantity,
.productPrice,
.productTotalCost,
#totalCost {
    text-align: right;
}

td,
th {
    border-style: solid;
    border-color: #888;
    border-width: 1px;
    padding: 10px;
}
</style>
