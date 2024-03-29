import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import categoriesReducer from './categoriesSlice';
import authReducer from './authSlice';
import UserSlice from './UserSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        categories: categoriesReducer,
        auth: authReducer,
        user: UserSlice
    },
})