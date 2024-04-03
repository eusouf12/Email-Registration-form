import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import LogIn from './Component/LogIn/LogIn';
import Register from './Component/Register/Register';
import HeroRegister from './Component/HeroRegister/HeroRegister';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<LogIn></LogIn>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/heroregister",
        element:<HeroRegister></HeroRegister>,
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
