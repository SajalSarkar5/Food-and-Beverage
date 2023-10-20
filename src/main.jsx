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
import Register from './pages/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './pages/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>
  },
  {
    path: "/product",
    element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
  },
  {
    path: "/cart",
    element: <PrivateRoute><MyCart></MyCart></PrivateRoute>
  },
  {
    path: "/branddetails/:id",
    element: <PrivateRoute><SameBrandDetails></SameBrandDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/brand/${params.id}`)
  },
  {
    path: "/moredetails/:id",
    element: <PrivateRoute><MoreDetails></MoreDetails></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/single/${params.id}`)
  },
  {
    path: "/updeddetails/:id",
    element: <PrivateRoute><UpdedCard></UpdedCard></PrivateRoute>,
    loader: ({ params }) => fetch(`http://localhost:5000/upded/${params.id}`)
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path: "/register",
    element: <Register></Register>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
