import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export interface Product {
    "id": number,
    "title": string,
    "price": number,
    "quantity": number,
    "total"?: number,
    "discountPercentage"?: number,
    "discountedTotal"?: number,
    "thumbnail": string | undefined,
    isDeleted: boolean
}

export interface CartsSlice {
    totalQuantity: number,
    discountedTotal: number,
    totalProducts: number,
    total: number,
    products: Product[]
}

const initialState: CartsSlice = {
    totalQuantity: 0,
    discountedTotal: 0,
    total: 0,
    totalProducts: 0,
    "products": [
        {
            "id": 0,
            "title": "title",
            "price": 0,
            "quantity": 0,
            "total": 0,
            "discountPercentage": 0,
            "discountedTotal": 0,
            "thumbnail": undefined,
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
                const response = await fetch(`https://dummyjson.com/carts/user/${userId}`);

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

            const productsWithIsDeleted = cart.products.map((product: Product) => ({
                ...product,
                isDeleted: false,
            }));

            return {
                ...state,
                totalQuantity: cart.totalQuantity,
                total: cart.total,
                discountedTotal: cart.discountedTotal,
                totalProducts: cart.totalProducts,
                products: productsWithIsDeleted,
            };
        });
    },
})


export default cartSlice.reducer;
