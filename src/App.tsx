// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Header from "./components/main/header.tsx";
// import Footer from "./components/main/footer.tsx";
// import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router-dom";
// import React from "react";
import ErrorPage from "./components/errorPage/errorPage.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/home/home.tsx";
import Header from "./components/header/header.tsx";
import Footer from "./components/footer/footer.tsx";
import OneProduct from "./components/oneProduct/oneProduct.tsx";
import MyCart from "./components/myCart/myCart.tsx";

// import Catalog from "./components/catalog/catalog.tsx";



function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/product/1",
            element: <OneProduct/>,
            errorElement: <ErrorPage/>
        },
        {
            path: "/cart",
            element: <MyCart/>,
            errorElement: <ErrorPage/>
        },
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
