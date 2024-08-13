import {configureStore} from "@reduxjs/toolkit";
// import productsCartRedux from './slices/productCarts/productCartsSlice.ts';

import cartReducer from '../redux/slices/cartsSlice.ts';
import {productsApi} from "./services/searchProducts.ts";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
