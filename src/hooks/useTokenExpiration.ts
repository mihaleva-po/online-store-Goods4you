// import {useEffect} from 'react';
// import {useAuth} from '../context/AuthContext';
// import {useNavigate} from "react-router-dom";
//
//
// export const useTokenExpiration = () => {
//     const {logout} = useAuth();
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         const token = localStorage.getItem('token');
//
//         if (token) {
//             console.log('время пошло');
//             const expirationTime = 1 * 60 * 1000; // 15 минут в миллисекундах
//             const timeoutId = setTimeout(() => {
//                 logout();
//                 navigate('/login');
//             }, expirationTime);
//
//             return () => clearTimeout(timeoutId);
//         }
//     }, [logout]);
// };
