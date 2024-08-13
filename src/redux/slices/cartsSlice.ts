import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


export interface CartsSlice {
    totalQuantity: number,
}

const initialState: CartsSlice = {
    totalQuantity: 0,
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
        builder
            .addCase(fetchUserCart.fulfilled, (state, action) => {
                state.totalQuantity = action?.payload?.carts[0]?.totalQuantity;
            })
    },
})


export default cartSlice.reducer;
