import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { firebase } from '../firebaseConfig';

export const fetchItems = createAsyncThunk('categories/fetchItems', async (_, { rejectWithValue }) => {
    try {
        const querySnapshot = await firebase.firestore().collection('Menu').get();
        const items = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return items;
    } catch (error) {
        return rejectWithValue(error);
    }
});

const initialState = {
    categories: [],
    items: [],
    loading: false,
    selectedCategory: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setSelectedCategory: (state, action) => {
            state.selectedCategory = action.payload;
        },
        setItems: (state, action) => {
            state.items = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchItems.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchItems.fulfilled, (state, action) => {
                state.items = action.payload;
                state.categories = [... new Set(action.payload.map(item => item.category))];
                state.loading = false;
            })
            .addCase(fetchItems.rejected, (state) => {
                console.log('error', state);
                state.loading = false;
            })
    }
})

export const { setSelectedCategory, setItems, setLoading } = categoriesSlice.actions;
export default categoriesSlice.reducer;
