import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";


export const currentAuthUserApi = createApi({
    reducerPath: 'currentAuthUser',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://dummyjson.com/',
        prepareHeaders: (headers) => {
            const token = localStorage.getItem("token");
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    endpoints: (builder) => ({
        currentAuthUser: builder.query({
            query: () => 'auth/me',
        }),
    }),
});

export const {useCurrentAuthUserQuery} = currentAuthUserApi;
