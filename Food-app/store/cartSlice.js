import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firebase } from '../firebaseConfig'; 

const initialState = {
    items: [],
    loading: false,
    totalQuantity: 0,
    totalPrice: 0,
};

export const loadCart = createAsyncThunk('cart/loadCart', async () => {
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

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity += newItem.quantity;
            } else {
                state.items.push({ ...newItem, quantity: newItem.quantity });
            }
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        updateCartInfo: (state) => {
            state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
            state.totalPrice = state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadCart.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(loadCart.rejected, (state) => {
                state.loading = false;
            })
            .addCase(saveCart.fulfilled, (state, action) => {
                state.items = action.payload;
            });
    },
});

export const { addToCart, removeFromCart, updateCartInfo } = cartSlice.actions;
export default cartSlice.reducer;