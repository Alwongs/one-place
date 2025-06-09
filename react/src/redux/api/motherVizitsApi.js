import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const motherVizitsApi = createApi({
    reducerPath: "motherVizitsApi",
    tagTypes: [ "MotherVizits" ],
    baseQuery,   
    endpoints: (build) => ({
        getMotherVizits: build.query({
            query: () => `mother-vizits`,
            providesTags: (result) => result
            ?   [
                    ...result.vizits.map(({ id }) => ({ type: "MotherVizits", id })),
                    { type: "MotherVizits", id: "LIST"},
                ]
            :   [{ type: "MotherVizits", id: "LIST" }],            
        }),                 
        deleteMotherVizit: build.mutation({
            query: (id) => ({
                url: `mother-vizit-delete/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "MotherVizits", id: "LIST"}]
        })          
    }),

});

export const { useGetMotherVizitsQuery, useDeleteMotherVizitMutation } = motherVizitsApi;