<script setup>
import {computed} from 'vue';
import {removeGrocery} from '../store';

const props = defineProps({
    groceries: Array,
});

const total = computed(() => {
    return props.groceries.reduce((sum, grocery) => {
        return sum + grocery.price * grocery.quantity;
    }, 0);
});
</script>

<template>
    <table>
        <thead>
            <tr>
                <th>Boodschappen</th>
                <th>Prijs</th>
                <th>Hoeveelheid</th>
                <th>Subtotaal</th>
                <th>Acties</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="grocery in props.groceries" :key="grocery.id">
                <td>{{ grocery.name }}</td>
                <td>€ {{ grocery.price.toFixed(2) }}</td>
                <td><input type="number" min="0" v-model="grocery.quantity" /></td>
                <td>€ {{ (grocery.price * grocery.quantity).toFixed(2) }}</td>
                <td>
                    <router-link :to="`/edit/${grocery.id}`">Bewerken</router-link>
                    |

                    <button @click="removeGrocery(grocery.id)">verwijderen</button>
                </td>
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

table .groceryQuantity,
.groceryPrice,
.groceryTotalCost,
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
