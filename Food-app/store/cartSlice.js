import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../firebaseConfig';

const initialState = {
    items: [],
    loading: false,
    totalQuantity: 0,
    totalPrice: 0,
};

// utilidades
export const loadCart = createAsyncThunk('cart/loadCart', async (_, { getState }) => {
    const { cart } = getState();
    if (cart.items.length > 0) {
        return cart.items;
    };

    const cartRef = firebase.firestore().collection('cart').doc('cart');
    const cartDoc = await cartRef.get();
    if (cartDoc.exists) {
        return cartDoc.data().items;
    } else {
        return [];
    }
});

export const saveCart = createAsyncThunk('cart/saveCart', async (items, { getState }) => {
    const cartRef = firestore.collection('cart').doc('cart');
    await cartRef.set({ items });
    return items;
});

export const calculateTotals = (items) => {
    let totalQuantity = 0;
    let totalPrice = 0;

    items.forEach(item => {
        totalQuantity += item.quantity;
        totalPrice += item.price * item.quantity;
    });
    return { totalQuantity, totalPrice };
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItemIndex = state.items.findIndex(item => item.id === newItem.id);

            if (existingItemIndex >= 0) {
                state.items[existingItemIndex].quantity += newItem.quantity;
            } else {
                state.items.push({ ...newItem, quantity: newItem.quantity });
            }

            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalPrice = totals.totalPrice;
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);

            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalPrice = totals.totalPrice;
        },
        updateCartInfo: (state) => {
            const totals = calculateTotals(state.items);
            state.totalQuantity = totals.totalQuantity;
            state.totalPrice = totals.totalPrice;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCart.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;

                const totals = calculateTotals(state.items);
                state.totalQuantity = totals.totalQuantity;
                state.totalPrice = totals.totalPrice;
            })
            .addCase(loadCart.rejected, (state) => {
                state.loading = false;
            })
            .addCase(saveCart.fulfilled, (state, action) => {
                state.items = action.payload;

                const totals = calculateTotals(state.items);
                state.totalQuantity = totals.totalQuantity;
                state.totalPrice = totals.totalPrice;
            });
    },
});

export const { addToCart, removeFromCart, updateCartInfo } = cartSlice.actions;
export default cartSlice.reducer;