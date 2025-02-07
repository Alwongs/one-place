import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export default baseQuery;