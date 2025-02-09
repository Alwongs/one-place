import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const usersApi = createApi({
    reducerPath: "usersApi",
    tagTypes: ["Users", "User"],
    baseQuery,   
    endpoints: (build) => ({
        getUsers: build.query({
            query: () => `users`,
            providesTags: (result) => result
            ?   [
                    ...result.users.map(({ id }) => ({ type: "Users", id })),
                    { type: "Users", id: "LIST"},
                ]
            :   [{ type: "Users", id: "LIST" }],            
        }), 
        getUser: build.query({
            query: (id) => `users/${id}`,
            providesTags: (result, error, id) => [{ type: "User", id }],  
        }),  
        deleteUser: build.mutation({
            query: (id) => ({
                url: `users/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Users", id: "LIST"}]
        })          
    }),

});

export const { useGetUserQuery, useGetUsersQuery, useDeleteUserMutation } = usersApi;
export default usersApi;