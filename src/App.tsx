import './App.css'
import ErrorPage from "./routes/errorPage/errorPage.tsx";
import {Route, Routes} from "react-router-dom";
import Header from "./components/main/header/header.tsx";
import Footer from "./components/main/footer/footer.tsx";
import OneProduct from "./components/oneProduct/oneProduct.tsx";
import MyCart from "./components/myCart/myCart.tsx";
import ScrollToTop from "./handles/scrollToTop.tsx";
import Home from "./components/home/home.tsx";
import Login from "./components/login/login.tsx";
import {useTokenExpiration} from "./hooks/useTokenExpiration.ts";
import ProtectedRoute from "./routes/protectedRoute/protectedRoute.tsx";
import RedirectIfAuthenticated from "./routes/redirectIfAuthenticated/redirectIfAuthenticated.tsx";


function App() {

    useTokenExpiration();

    return (
        <div className={"app"}>
            <Header/>
            <main className={"main"}>
                <Routes>
                    {/* Открытые маршруты */}
                    <Route path="/login" element={
                        <RedirectIfAuthenticated>
                            <Login/>
                        </RedirectIfAuthenticated>
                    }/>
                    <Route path="/404" element={<ErrorPage/>}/>

                    {/* Защищенные маршруты через ProtectedRoute */}
                    <Route element={<ProtectedRoute/>}>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/cart" element={<MyCart/>}/>
                        <Route
                            path="/product/:id"
                            element={
                                <ScrollToTop>
                                    <OneProduct/>
                                </ScrollToTop>
                            }
                        />
                    </Route>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
