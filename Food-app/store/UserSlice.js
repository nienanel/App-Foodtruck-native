import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userImage: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserImage: (state, action) => {
            state.userImage = action.payload
        },
        clearUserImage: state => {
            state.userImage = null
        }
    }
})

export const { setUserImage, clearUserImage } = userSlice.actions;
export default userSlice.reducer