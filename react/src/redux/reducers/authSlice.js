import { createSlice } from "@reduxjs/toolkit";
import readUserFromLocalStorage from "@redux-utils/readUserFromLocalStorage";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: readUserFromLocalStorage(),
        token: localStorage.getItem("ACCESS_TOKEN")
    },
    reducers: {
        setAuth: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            localStorage.setItem("USER", JSON.stringify(action.payload.user));
            localStorage.setItem("ACCESS_TOKEN", action.payload.token);
        },
        removeAuth: (state) => {
            state.user = null;
            state.token = null;
            localStorage.clear();
        },
    },
});

export const { setAuth, removeAuth } = authSlice.actions;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export default authSlice.reducer;