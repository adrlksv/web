import React, {createContext} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import { Asteroids } from './pages/Asteroids'
import { Destroyment } from './pages/Destroyment'
import { Asteroid } from './pages/Asteroid'
import {AsteroidsContextProvider} from "./components/asteroids-context/AsteroidsContext";

const router = createHashRouter([
    {
        path: '/asteroids',
        element: <Asteroids />,
    },
    {
        path: '/destroyment',
        element: <Destroyment />,
    },
    {
        path: '/asteroids/:id',
        element: <Asteroid />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <AsteroidsContextProvider>
            <RouterProvider router={router} />
        </AsteroidsContextProvider>
    </React.StrictMode>
);
