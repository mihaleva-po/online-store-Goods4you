import React, {createContext, useContext, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import {CartsSlice, fetchUserCart} from "../redux/slices/cartsSlice";
import {useAuth} from "./AuthContext.tsx";

const CartContext = createContext<{ cart: CartsSlice } | null>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart);
    const [cartState, setCartState] = useState(cart);

    const {user} = useAuth();

    useEffect(() => {
        if (user?.id !== null && user?.id !== undefined) {
            dispatch(fetchUserCart(user.id));
        }
    }, [dispatch, user]);

    useEffect(() => {
        setCartState(cart);
    }, [cart]);

    return (
        <CartContext.Provider value={{cart: cartState}}>
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



