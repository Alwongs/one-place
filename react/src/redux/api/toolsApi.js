import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const toolsApi = createApi({
    reducerPath: "toolsApi",
    tagTypes: ["Tools", "Tool"],
    baseQuery,   
    endpoints: (build) => ({
        getTools: build.query({
            query: () => `tools`,
            providesTags: (result) => result
            ?   [
                    ...result.tools.map(({ id }) => ({ type: "Tools", id })),
                    { type: "Tools", id: "LIST"},
                ]
            :   [{ type: "Tools", id: "LIST" }],            
        }), 
        getTool: build.query({
            query: (id) => `tools/${id}`,
            providesTags: (result, error, id) => [{ type: "Tool", id }],  
        }),  
        addTool: build.mutation({
            query: (body) => ({
                url: `tools`,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: "Tools", id: "LIST"}]
        }), 
        updateTool: build.mutation({
            query: (body) => ({
                url: `tools/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Tool", id }, {type: "Tools", id: "LIST"}],
        }),                
        deleteTool: build.mutation({
            query: (id) => ({
                url: `tools/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Tools", id: "LIST"}]
        })          
    }),

});

export const { useGetToolQuery, useGetToolsQuery, useAddToolMutation, useDeleteToolMutation, useUpdateToolMutation } = toolsApi;