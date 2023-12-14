import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [],
}

export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const existingIndex = state.items.findIndex(item => item.id === action.payload.id);

            if (existingIndex >= 0) {
                // Incrementa la cantidad si el producto ya está en el carrito
                state.items[existingIndex].quantity += action.payload.quantity;
            } else {
                // Agrega un nuevo producto al carrito
                state.items.push(action.payload);
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, incrementByAmount } = cartSlice.actions;
export const selectCartItems = (state) => state.cart.items;

export default cartSlice.reducer;