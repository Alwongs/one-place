import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const carsApi = createApi({
    reducerPath: "carsApi",
    tagTypes: ["Cars", "Car"],
    baseQuery,   
    endpoints: (build) => ({
        getCars: build.query({
            query: () => `cars`,
            providesTags: (result) => result
            ?   [
                    ...result.cars.map(({ id }) => ({ type: "Cars", id })),
                    { type: "Cars", id: "LIST"},
                ]
            :   [{ type: "Cars", id: "LIST" }],            
        }), 
        getCar: build.query({
            query: (id) => `cars/${id}`,
            providesTags: (result, error, id) => [{ type: "Car", id }],  
        }),  
        addCar: build.mutation({
            query: (body) => ({
                url: `cars`,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: "Cars", id: "LIST"}]
        }), 
        updateCar: build.mutation({
            query: (body) => ({
                url: `cars/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Car", id }, {type: "Cars", id: "LIST"}],
        }),                
        deleteCar: build.mutation({
            query: (id) => ({
                url: `cars/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Cars", id: "LIST"}]
        })          
    }),

});

export const { useGetCarQuery, useGetCarsQuery, useAddCarMutation, useDeleteCarMutation, useUpdateCarMutation } = carsApi;