import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "./searchProducts.ts";


export const singleProductApi = createApi({
    reducerPath: 'singleProduct',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        singleProduct: builder.query<Product, { id: number }>({
            query: ({id}) =>
                ({
                    url: `https://dummyjson.com/products/${id}`,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    }
                })
        }),
    }),
})

export const {useSingleProductQuery} = singleProductApi;
