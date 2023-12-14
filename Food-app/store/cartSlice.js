import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { firestore } from '../firebaseConfig'; 

const initialState = {
    items: [],
    loading: false
};

export const loadCart = createAsyncThunk('cart/loadCart', async () => {
    const cartRef = firestore.collection('cart').doc('cart');
    const cartDoc = await cartRef.get();
    if (cartDoc.exists) {
        return cartDoc.data().items;
    } else {
        return [];
    }
});

export const saveCart = createAsyncThunk('cart/saveCart', async (items, { getState }) => {
    const cartRef = firestore.collection('carts').doc('cart');
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
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
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

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;