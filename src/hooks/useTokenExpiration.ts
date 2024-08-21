import {useEffect} from 'react';
import {useAuth} from '../context/AuthContext';

export const useTokenExpiration = () => {
    const {logout} = useAuth();

    useEffect(() => {
        const token = localStorage.getItem('token');

        if (token) {
            const expirationTime = 15 * 60 * 1000; // 15 минут в миллисекундах
            const timeoutId = setTimeout(() => {
                logout();
            }, expirationTime);

            return () => clearTimeout(timeoutId);
        }
    }, [logout]);
};
