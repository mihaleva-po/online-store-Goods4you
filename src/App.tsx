import './App.css'
import ErrorPage from "./routes/errorPage/errorPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/home.tsx";
import Header from "./components/main/header/header.tsx";
import Footer from "./components/main/footer/footer.tsx";
import OneProduct from "./components/oneProduct/oneProduct.tsx";
import MyCart from "./components/myCart/myCart.tsx";
import ScrollToTop from "./handles/scrollToTop.tsx";


function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
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
