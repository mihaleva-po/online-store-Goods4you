import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {HelmetProvider} from 'react-helmet-async';
import {Provider} from "react-redux";
import {store} from "./redux/store.ts";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <QueryClientProvider client={queryClient}>
                    <App/>
                </QueryClientProvider>
            </Provider>
        </HelmetProvider>
    </React.StrictMode>,
)
