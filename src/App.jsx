import React, { Children } from 'react'
import Layout from './Layout'
import About from './About'
import Home from './Home'
import Blog from './Blog'
import Login from './login'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
// import { Link } from 'react-router-dom';
export default function App() {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
       {
        path:'',
        element:<Home />
       },
       {
        path:'about',
        element:<About />
       },
       {
        path:'blog',
        element:<Blog />
       }
      ]
    },{
      path:'/login',
      element:<Login />
    }
  ])
  return (
    <>
    <RouterProvider router={routes}  />
    </>
  )
}
