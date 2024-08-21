import {useEffect} from "react";
import {useNavigate} from "react-router-dom";


const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return !!token;
};

const RedirectIfAuthenticated = ({children}: { children: JSX.Element }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/");
        }
    }, []);

    return children;
};

export default RedirectIfAuthenticated;
