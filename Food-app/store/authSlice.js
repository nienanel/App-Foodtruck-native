import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: state => {
            state.user = {
                email: null,
                token: null,
                userImage: null,
                userAddress: null,
                userDetails: null,
            }
        },
    }
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;