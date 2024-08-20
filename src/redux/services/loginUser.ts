import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const loginUserApi = createApi({
    reducerPath: 'loginUserApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'https://dummyjson.com/'}),
    endpoints: (builder) => ({

        loginUser: builder.mutation<{ token: string, id: number }, {
            username: string,
            password: string,
            expiresInMins?: number
        }>({
            query: (credentials) => ({
                url: 'auth/login',
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: credentials,
            }),
        }),
    }),
});

export const {useLoginUserMutation} = loginUserApi;
