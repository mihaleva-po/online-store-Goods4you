import React, {createContext, useContext, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from "../redux/store";
import {CartsSlice, fetchUserCart} from "../redux/slices/cartsSlice";


const CartContext = createContext<CartsSlice | null>(null);


export const CartProvider: React.FC<{ children: React.ReactNode }> = ({children}) => {
    const dispatch = useDispatch<AppDispatch>();
    const cart = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        dispatch(fetchUserCart(6));
    }, [dispatch]);

    return (
        <CartContext.Provider value={cart}>
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
