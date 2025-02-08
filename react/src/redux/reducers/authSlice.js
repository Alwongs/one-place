import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: {
            name: localStorage.getItem("USER_NAME")
        },
        token: localStorage.getItem("ACCESS_TOKEN")
    },
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("ACCESS_TOKEN", action.payload.token);
            localStorage.setItem("USER_NAME", action.payload.user.name);
        },
        removeAuth: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("ACCESS_TOKEN");
            localStorage.removeItem("USER_NAME");
        },
    },
});

export const { setAuth, removeAuth } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;