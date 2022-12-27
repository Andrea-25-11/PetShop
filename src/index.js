import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from "./components/Home/Home";
import {Brands}from "./components/Brands/Brands";
import {Contact} from "./components/Contact/Contact";
import {Services1} from "./components/Services1/Services1";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([
{
  path: "/home",
  element: <Home/>
},
{
  path: "/services",
  element: <Services1/>
},
{
  path: "/Brands",
  element: <Brands/>
},
{
  path: "/Contact",
  element: <Contact/>
},
{
  path: "/",
  element: <App/>
},
]
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
