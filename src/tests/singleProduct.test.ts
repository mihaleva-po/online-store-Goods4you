import {describe, expect, it, vi} from "vitest";
import {configureStore} from "@reduxjs/toolkit";
import {singleProductApi} from "../redux/services/singleProduct";
import {setupListeners} from "@reduxjs/toolkit/query";

describe('singleProduct', () => {
    it('Получение информации о товаре по id', async () => {
        const mockResponse = new Response(
            JSON.stringify({
                id: 1,
                title: "iPhone 12",
                discountPercentage: 10,
                price: 1000,
                images: ["image1.jpg", "image2.jpg"],
                thumbnail: "thumb.jpg",
                rating: 4.5,
                tags: ["electronics", "smartphone"],
                availabilityStatus: "In Stock",
                shippingInformation: "Ships in 2 days",
                warrantyInformation: "1 year warranty",
                description: "Latest iPhone model",
                stock: 10,
            }),
            {status: 200, headers: {'Content-Type': 'application/json'}}
        );

        global.fetch = vi.fn().mockResolvedValue(mockResponse);

        const store = configureStore({
            reducer: {
                [singleProductApi.reducerPath]: singleProductApi.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(singleProductApi.middleware),
        });

        setupListeners(store.dispatch);

        const result = await store.dispatch(
            singleProductApi.endpoints.singleProduct.initiate({id: 1})
        );

        if (result.error) {
            console.error("Request failed with error:", result.error);
        } else {
            console.log("Request succeeded with data:", result.data);
        }

        const {data, error} = result;

        expect(error).toBeUndefined();
        expect(data).toEqual({
            id: 1,
            title: "iPhone 12",
            discountPercentage: 10,
            price: 1000,
            images: ["image1.jpg", "image2.jpg"],
            thumbnail: "thumb.jpg",
            rating: 4.5,
            tags: ["electronics", "smartphone"],
            availabilityStatus: "In Stock",
            shippingInformation: "Ships in 2 days",
            warrantyInformation: "1 year warranty",
            description: "Latest iPhone model",
            stock: 10,
        });
    });


    it('Обработка ошибки при получении информации о товаре по id', async () => {
        const mockError = new Response(
            JSON.stringify({message: 'Product not found'}),
            {status: 404, headers: {'Content-Type': 'application/json'}}
        );

        global.fetch = vi.fn().mockResolvedValue(mockError);

        const store = configureStore({
            reducer: {
                [singleProductApi.reducerPath]: singleProductApi.reducer,
            },
            middleware: (getDefaultMiddleware) =>
                getDefaultMiddleware().concat(singleProductApi.middleware),
        });

        setupListeners(store.dispatch);

        const result = await store.dispatch(
            singleProductApi.endpoints.singleProduct.initiate({id: 1})
        );

        if (result.error) {
            console.error("Request failed with error:", result.error);
        } else {
            console.log("Request succeeded with data:", result.data);
        }

        const {data, error} = result;

        expect(data).toBeUndefined();
        expect(error).toBeDefined();
    });
});
