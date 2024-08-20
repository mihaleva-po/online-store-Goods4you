import React, {createContext, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import {CartsSlice, fetchUserCart} from "../redux/slices/cartsSlice";

const CartContext = createContext<{ cart: CartsSlice; setUserId: (id: number) => void } | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart);
    const [userId, setUserId] = useState<number | null>(null);

    useEffect(() => {
        if (userId !== null) {
            dispatch(fetchUserCart(userId));
        }
    }, [dispatch, userId]);

    return (
        <CartContext.Provider value={{cart, setUserId}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === null) {
        throw new Error('useCart должен использоваться внутри CartProvider');
    }
    return context;
};



