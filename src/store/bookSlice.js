import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getBooks = createAsyncThunk('book/getBooks',
    async (_, thunkABI) => {
        const { rejectWithValue } = thunkABI;
        try {
            const res = await fetch("http://localhost:3005/books");
            const data = await res.json();
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    });

const bookSlice = createSlice({
    name: "book",
    initialState: { books: [], isLoading: false, error: null },
    extraReducers: {
        [getBooks.pending]: (state, action) => {
            state.isLoading = true;
            state.error = null
            console.log(state.error);
        },
        [getBooks.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.books = action.payload;
        },
        [getBooks.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            console.log(state.error);
        }
    },
})

export default bookSlice.reducer