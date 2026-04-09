import {computed, ref} from 'vue';

// state
const groceries = ref([
    {name: 'Rijst', price: 1.0, quantity: 0, id: 1},
    {name: 'Broccoli', price: 0.99, quantity: 0, id: 2},
    {name: 'Koekjes', price: 1.2, quantity: 0, id: 3},
    {name: 'Noten', price: 2.99, quantity: 0, id: 4},
]);

//getter
export const getAllGroceries = computed(() => groceries.value);

export const getGroceryById = id => {
    return groceries.value.find(g => g.id == id);
};

export const updateGrocery = updated => {
    const index = groceries.value.findIndex(grocery => grocery.id == updated.id);

    if (index !== -1) {
        groceries.value[index] = updated;
    }
};

export const removeGrocery = id => {
    groceries.value = groceries.value.filter(grocery => grocery.id !== id);
};

//action
let idCount = 5;

export const addGrocery = grocery => {
    groceries.value.push({...grocery, id: idCount++});
};
