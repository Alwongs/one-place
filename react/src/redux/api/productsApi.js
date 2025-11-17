import { createApi } from "@reduxjs/toolkit/query/react";
import baseQuery from "@redux-utils/baseQuery";

export const productsApi = createApi({
    reducerPath: "productsApi",
    tagTypes: ["Products", "Product"],
    baseQuery,   
    endpoints: (build) => ({
        getProducts: build.query({
            query: () => `products`,
            providesTags: (result) => result
            ?   [
                    ...result.products.map(({ id }) => ({ type: "Products", id })),
                    { type: "Products", id: "LIST"},
                ]
            :   [{ type: "Products", id: "LIST" }],            
        }), 
        getProduct: build.query({
            query: (id) => `products/${id}`,
            providesTags: (result, error, id) => [{ type: "Product", id }],  
        }),  
        addProduct: build.mutation({
            query: (body) => ({
                url: `products`,
                method: "POST",
                body
            }),
            invalidatesTags: [{type: "Products", id: "LIST"}]
        }), 
        updateProduct: build.mutation({
            query: (body) => ({
                url: `products/${body.id}`,
                method: "PUT",
                body
            }),
            invalidatesTags: (result, error, { id }) => [{ type: "Product", id }, {type: "Products", id: "LIST"}],
        }),                
        deleteProduct: build.mutation({
            query: (id) => ({
                url: `products/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: [{type: "Products", id: "LIST"}]
        })          
    }),

});

export const {
    useGetProductsQuery,
    useGetProductQuery,
    useAddProductMutation,
    useDeleteProductMutation,
    useUpdateProductMutation
} = productsApi;