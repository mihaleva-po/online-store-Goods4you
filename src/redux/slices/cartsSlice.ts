import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {CartsSlice, ProductCart} from "../../types/type.ts";


const initialState: CartsSlice = {
    totalQuantity: 0,
    discountedTotal: 0,
    total: 0,
    totalProducts: 0,
    products: [
        {
            id: 0,
            title: "title",
            price: 0,
            quantity: 0,
            total: 0,
            discountPercentage: 0,
            discountedTotal: 0,
            thumbnail: "",
            isDeleted: false
        },
    ]
}


export const fetchUserCart = createAsyncThunk(
    'cart/fetchUserCarts',
    async (userId: number, {rejectWithValue}) => {

        const maxRetries = 3;
        const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(`https://dummyjson.com/carts/user/${userId}`, {
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    },
                })

                if (!response.ok) {
                    return rejectWithValue(new Error('Failed to fetch cart data').message);
                }
                return await response.json();

            } catch (error) {
                if (attempt < maxRetries) {
                    await delay(1000); // Задержка в 1 секунду перед повторной попыткой
                } else {
                    // Если все попытки завершились ошибкой, возвращаем сообщение об ошибке
                    if (error instanceof Error) {
                        return rejectWithValue(error.message);
                    } else {
                        return rejectWithValue('An unknown error occurred');
                    }
                }
            }
        }
    }
)


interface PutUserCartProps {
    idProduct?: number,
    quantity?: number,
    products: ProductCart[]
}

export const putUserCart = createAsyncThunk(
    'cart/putUserCart',
    async ({idProduct, quantity, products}: PutUserCartProps, {rejectWithValue}) => {
        const maxRetries = 3;
        const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

        if (idProduct === undefined || quantity === undefined) {
            return rejectWithValue('Missing required fields');
        }

        for (let attempt = 1; attempt <= maxRetries; attempt++) {
            try {
                const response = await fetch(`https://dummyjson.com/carts/1`, {
                    method: "PUT",
                    headers: {
                        'Authorization': `Bearer ${localStorage.getItem("token")}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        merge: false,
                        products: [
                            ...products,
                            {
                                id: idProduct,
                                quantity: quantity,
                            },
                        ]
                    })
                })

                if (!response.ok) {
                    return rejectWithValue(new Error('Failed to fetch cart data').message);
                }
                return await response.json();


            } catch (error) {
                if (attempt < maxRetries) {
                    await delay(1000); // Задержка в 1 секунду перед повторной попыткой
                } else {
                    // Если все попытки завершились ошибкой, возвращаем сообщение об ошибке
                    if (error instanceof Error) {
                        return rejectWithValue(error.message);
                    } else {
                        return rejectWithValue('An unknown error occurred');
                    }
                }
            }
        }
    }
)


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchUserCart.fulfilled, (state, action) => {
            const cart = action?.payload?.carts[0];

            const productsWithIsDeleted = cart?.products?.map((product: ProductCart) => ({
                ...product,
                isDeleted: false,
            }));

            return {
                ...state,
                totalQuantity: cart?.totalQuantity,
                total: cart?.total,
                discountedTotal: cart?.discountedTotal,
                totalProducts: cart?.totalProducts,
                products: productsWithIsDeleted,
            };
        });


        builder.addCase(putUserCart.fulfilled, (state, action) => {
            const cart = action?.payload;

            const productsWithIsDeleted = cart?.products?.map((product: ProductCart) =>
                ({...product, isDeleted: product.quantity === 0}));

            const totalProducts = productsWithIsDeleted.reduce((count: number, product: ProductCart) => {
                if (!product.isDeleted) {
                    return count + 1;
                }
                return count;
            }, 0);

            return {
                ...state,
                totalQuantity: cart?.totalQuantity,
                total: cart?.total,
                discountedTotal: cart?.discountedTotal,
                totalProducts: totalProducts,
                products: productsWithIsDeleted,
            }
        })
    },
})


export default cartSlice.reducer;
