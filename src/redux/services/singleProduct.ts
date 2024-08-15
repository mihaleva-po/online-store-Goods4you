import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Product} from "./searchProducts.ts";


export const singleProductApi = createApi({
    reducerPath: 'singleProduct',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        singleProduct: builder.query<Product, { id: number }>({
            query: ({id}) =>
                `https://dummyjson.com/products/${id}`,
        }),
    }),
})

export const {useSingleProductQuery} = singleProductApi;
