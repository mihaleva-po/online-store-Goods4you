import './App.css'
import ErrorPage from "./routes/errorPage/errorPage.tsx";
import {Navigate, Route, Routes, useNavigate} from "react-router-dom";
import Header from "./components/main/header/header.tsx";
import Footer from "./components/main/footer/footer.tsx";
import OneProduct from "./components/oneProduct/oneProduct.tsx";
import MyCart from "./components/myCart/myCart.tsx";
import Home from "./components/home/home.tsx";
import Login from "./components/login/login.tsx";
import {useEffect} from "react";
import {useCurrentAuthUserQuery} from "./redux/services/currentAuthUser.ts";
import {useAuth} from "./context/AuthContext.tsx";


function App() {

    const navigate = useNavigate();
    const {logout} = useAuth();

    const {data, isLoading, isError} = useCurrentAuthUserQuery(undefined);

    useEffect(() => {
        if (isError) {
            logout();
            navigate("/login");
        }
    }, [data, isLoading, isError]);

    return (
        <div className={"app"}>
            <Header/>
            <main className={"main"}>
                <Routes>

                    <Route path="/404" element={<ErrorPage/>}/>

                    {
                        localStorage.getItem("token") ? (
                                <>
                                    <Route path="/" element={<Home/>}/>
                                    <Route path="/cart" element={<MyCart/>}/>
                                    <Route path="/product/:id" element={<OneProduct/>}/>
                                    <Route path="/login" element={<Navigate to="/" replace={true}/>}/>
                                    <Route path="*" element={<Navigate to="/404" replace={true}/>}/>
                                </>
                            )
                            : (
                                <>
                                    <Route path="/login" element={<Login/>}/>
                                    <Route path="*" element={<Navigate to="/login" replace={true}/>}/>
                                </>
                            )
                    }
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
