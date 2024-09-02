import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import AboutUs from './Components/AboutUs/AboutUs.jsx'
import User from './Components/User/User.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Github, { LoaderPr } from './Components/Github/Github.jsx'
import BuyAndSell from './Components/BuyAndSell/BuyAndSell.jsx'
import Issues from './Components/Issues/Issues.jsx'
import Login from './Components/Login/Login.jsx'
import Cart from './Components/Cart/Cart.jsx'



// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home/>
//       },
//       {
//         path:'aboutUs',
//         element:<AboutUs/>
//       },
//       {
//         path:'user/:userid',
//         element:<User/>
//       },
//       {
//         path:'Contact',
//         element:<Contact/>
//       },
//       {
//         path:'github',
//         element:<Github/>
//       }
//     ]
//   }
// ])





const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path=''  element={<Home/>}/>
      <Route path='contactus'  element={<Contact/>}/>
      <Route path='aboutus'  element={<AboutUs/>}/>
      <Route path='buyandsell'  element={<BuyAndSell/>}/>
      <Route path='issues'  element={<Issues/> }/>
      <Route path='login'  element={<Login />}/>
      <Route path='cart'  element={<Cart />}/>
      <Route path='user/:userid'  element={<User/>}/>
      <Route 
      loader = {LoaderPr}
      path='github'  element={<Github/>}/>
    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/> 
    </React.StrictMode>,
)


