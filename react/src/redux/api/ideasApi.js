import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const ideasApi = createApi({
    reducerPath: "ideasApi",
    tagTypes: ["Ideas", "Idea"],
    baseQuery,   
    endpoints: (build) => ({
        getIdeas: build.query({
            query: () => `ideas`,
            providesTags: (result) => result
            ?   [
                    ...result.ideas.map(({ id }) => ({ type: "Ideas", id })),
                    { type: "Ideas", id: "LIST"},
                ]
            :   [{ type: "Ideas", id: "LIST" }],            
        }), 
        getIdea: build.query({
            query: (id) => `ideas/${id}`,
            providesTags: (result, error, id) => [{ type: "Idea", id }],  
        }),  
        addIdea: build.mutation({
            query: (body) => ({
                url: `ideas`,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: "Ideas", id: "LIST"}]
        }), 
        updateIdea: build.mutation({
            query: (body) => ({
                url: `ideas/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Idea", id }, {type: "Ideas", id: "LIST"}],
        }),                
        deleteIdea: build.mutation({
            query: (id) => ({
                url: `ideas/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Ideas", id: "LIST"}]
        })          
    }),

});

export const {
    useGetIdeaQuery,
    useGetIdeasQuery,
    useAddIdeaMutation,
    useDeleteIdeaMutation,
    useUpdateIdeaMutation
} = ideasApi;