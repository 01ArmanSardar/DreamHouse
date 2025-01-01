import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from './Layout/Root';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import AuthProvider from './Page/CommonComponents/AuthProvider';
import HouseDetails from './Page/Home/HouseDetails';
import PrivateRoute from './Route/PrivateRoute';
import Errorpage from './Page/CommonComponents/Errorpage';
import UserDetails from './UserDetails/UserDetails';



const router = createBrowserRouter(

  [
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Errorpage></Errorpage>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>,
        },

        {
          path: '/Register',
          element: <Register></Register>
        },
        {
          path: '/houses/:id',
          element: <PrivateRoute><HouseDetails></HouseDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://dreamhouseserverside-1.onrender.com/houses/${params.id}`),
        },
        {
          path:'/user',
          element:<PrivateRoute><UserDetails></UserDetails></PrivateRoute>
        }

      ]
    },
  ]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
