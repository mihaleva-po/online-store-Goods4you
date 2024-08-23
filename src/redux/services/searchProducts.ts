import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ProductCatalog} from "../../types/type.ts";


export interface ProductsResponse {
    products: ProductCatalog[];
    total: number;
    skip: number;
    limit: number;
}

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({
        searchProducts: builder.query<ProductsResponse, { q: string; limit: number; skip: number }>({
            query: ({q, limit, skip}) =>
                ({
                    url: `products/search?q=${q}&limit=${limit}&skip=${skip}`,
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    }
                })
        }),
    }),
});


export const {useSearchProductsQuery} = productsApi;
