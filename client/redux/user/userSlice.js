import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const USER_API = 'http://127.0.0.1:3000/users';

export const fetchUsers = createAsyncThunk(
    'user/fetchUsers',
    async () => {
        try {
            const response = await fetch(USER_API);
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message);
        }
    }
);

const initialState = {
    data: [],
    loading: false,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state) => {
          state.loading = true;
          state.error = null; // Reset error state
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
    },
});

export default userSlice.reducer;
