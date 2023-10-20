import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';
import ErrorPage from './pages/ErrorPage';
import SameBrandDetails from './pages/SameBrandDetails';
import MoreDetails from './pages/MoreDetails';
import UpdedCard from './pages/UpdedCard';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/product",
    element: <AddProduct></AddProduct>
  },
  {
    path: "/cart",
    element: <MyCart></MyCart>
  },
  {
    path: "/branddetails/:id",
    element: <SameBrandDetails></SameBrandDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`)
  },
  {
    path: "/moredetails/:id",
    element: <MoreDetails></MoreDetails>,
    loader: ({ params }) => fetch(`http://localhost:5000/single/${params.id}`)
  },
  {
    path: "/updeddetails/:id",
    element: <UpdedCard></UpdedCard>,
    loader: ({ params }) => fetch(`http://localhost:5000/upded/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
