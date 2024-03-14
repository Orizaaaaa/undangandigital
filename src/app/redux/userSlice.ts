// src/redux/productSlice.js

import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userList: false,
    },
    reducers: {
        playMusic: (state: any) => {
            state.userList = false;
        },
    },
});

export const { playMusic } = userSlice.actions;
export default userSlice.reducer;
