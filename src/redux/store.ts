import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../redux/slices/cartsSlice.ts';
import {productsApi} from "./services/searchProducts.ts";
import {singleProductApi} from "./services/singleProduct.ts";
import {setupListeners} from "@reduxjs/toolkit/query";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [singleProductApi.reducerPath]: singleProductApi.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(productsApi.middleware)
            .concat(singleProductApi.middleware),
});

setupListeners(store.dispatch);


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
