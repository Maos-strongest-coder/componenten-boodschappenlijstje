import {computed, ref} from 'vue';

// state
const groceries = ref([
    {name: 'Rijst', price: 1.0, quantity: 0},
    {name: 'Broccoli', price: 0.99, quantity: 0},
    {name: 'Koekjes', price: 1.2, quantity: 0},
    {name: 'Noten', price: 2.99, quantity: 0},
]);

//getter om toegang te krijgen tot de boodschappen
export const getAllGroceries = computed(() => groceries.value);

export const getGroceryById = id => computed(() => groceries.value.find(grocery => grocery.id == id));

// action om boodschappen toe te voegen
let id = 0;

export const addGrocery = grocery => {
    groceries.value.push({
        ...grocery,
        id: id++,
    });
};
