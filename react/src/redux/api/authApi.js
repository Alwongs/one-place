import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const authApi = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "login",
                method: "POST",
                body: credentials,
            }),
        }),
        register: builder.mutation({
            query: (credentials) => ({
                url: "register",
                method: "POST",
                body: credentials,
            }),
        }),
        logout: builder.mutation({
            query: () => ({
                url: "logout",
                method: "POST",                
            })
        }),
        getAuth: builder.query({
            query: () => "user"
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation, useLogoutMutation, useGetAuthQuery } = authApi;