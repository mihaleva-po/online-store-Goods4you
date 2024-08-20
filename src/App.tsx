import './App.css'
import ErrorPage from "./routes/errorPage/errorPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Header from "./components/main/header/header.tsx";
import Footer from "./components/main/footer/footer.tsx";
import OneProduct from "./components/oneProduct/oneProduct.tsx";
import MyCart from "./components/myCart/myCart.tsx";
import ScrollToTop from "./handles/scrollToTop.tsx";
import Login from "./login/login.tsx";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            // element: <Home/>,
            element: <Login/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/product/:id",
            element:
                <>
                    <ScrollToTop>
                        <OneProduct/>
                    </ScrollToTop>
                </>
            ,
            errorElement: <ErrorPage/>
        },
        {
            path: "/cart",
            element: <MyCart/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/404",
            element: <ErrorPage/>
        }
    ]);

    return (
        <div className={"app"}>
            <Header/>
            <main className={"main"}>
                <RouterProvider router={router}/>
            </main>
            <Footer/>
        </div>
    )
}

export default App
