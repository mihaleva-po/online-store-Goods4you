import {describe, it, expect, vi} from 'vitest';
import {putUserCart} from "../redux/slices/cartsSlice.ts";
import {configureStore} from "@reduxjs/toolkit";
import cartReducer from '../redux/slices/cartsSlice.ts';

describe('putUserCart', () => {
    it('Добавление товара в пустую корзину', async () => {
        global.fetch = vi.fn().mockResolvedValue({
            ok: true,
            json: async () => ({
                totalQuantity: 1,
                total: 100,
                discountedTotal: 90,
                totalProducts: 1,
                products: [
                    {id: 1, quantity: 1, total: 100, discountPercentage: 10, discountedTotal: 90}
                ]
            }),
        });

        const store = configureStore({
            reducer: {
                cart: cartReducer,
            },
        });

        const input = {idProduct: 1, quantity: 1, products: undefined};
        await store.dispatch(putUserCart(input));

        const expectedCartState = {
            totalQuantity: 1,
            total: 100,
            discountedTotal: 90,
            totalProducts: 1,
            products: [
                {id: 1, quantity: 1, total: 100, discountPercentage: 10, discountedTotal: 90, isDeleted: false}
            ]
        };

        const state = store.getState().cart;

        expect(state.totalQuantity).toBe(expectedCartState.totalQuantity);
        expect(state.total).toBe(expectedCartState.total);
        expect(state.discountedTotal).toBe(expectedCartState.discountedTotal);
        expect(state.totalProducts).toBe(expectedCartState.totalProducts);
        expect(state.products).toEqual(expectedCartState.products);
    });
});
