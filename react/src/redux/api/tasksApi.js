import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    tagTypes: ["Tasks", "Task"],
    baseQuery,   
    endpoints: (build) => ({
        getTasks: build.query({
            query: () => `tasks`,
            providesTags: (result) => result
            ?   [
                    ...result.tasks.map(({ id }) => ({ type: "Tasks", id })),
                    { type: "Tasks", id: "LIST"},
                ]
            :   [{ type: "Tasks", id: "LIST" }],            
        }), 
        getTask: build.query({
            query: (id) => `tasks/${id}`,
            providesTags: (result, error, id) => [{ type: "Task", id }],  
        }),  
        addTask: build.mutation({
            query: (body) => ({
                url: `tasks`,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: "Tasks", id: "LIST"}]
        }), 
        updateTask: build.mutation({
            query: (body) => ({
                url: `tasks/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Task", id }, {type: "Tasks", id: "LIST"}],
        }),                
        deleteTask: build.mutation({
            query: (id) => ({
                url: `tasks/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Tasks", id: "LIST"}]
        })          
    }),

});

export const { useGetTaskQuery, useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } = tasksApi;