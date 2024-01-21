import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    userDetails: null,
    userImage: null,
    userAddress: null
}

export const fetchUserDetails = createAsyncThunk('user/fetchUserDetails', async (userId, thunkAPI) => {
    try {
        return await firebaseService.getUserDetails(userId);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload
        },
        setUserImage: (state, action) => {
            state.userImage = action.payload
        },
        setUserAddress: (state, action) => {
            state.userAddress = action.payload
        },
        clearUserData: state => {
            state.userImage = null
            state.userAddress = null
            state.userDetails = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUserDetails.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUserDetails.fulfilled, (state, action) => {
                state.userDetails = action.payload;
                state.isLoading = false;
            })
            .addCase(fetchUserDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    }
});

export const { setUserImage, clearUserData, setUserAddress, setUserDetails } = userSlice.actions;
export default userSlice.reducer