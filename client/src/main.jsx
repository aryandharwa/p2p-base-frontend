import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/home/Home.jsx'
import Navbar from './components/navbar/Navbar.jsx'
import NewOrder from './components/newOrder/NewOrder.jsx'
import Orders from './components/orders/Orders.jsx'
import ClaimOrder from './components/claimOrder/ClaimOrder.jsx'

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  BrowserRouter,
} from "react-router-dom";
import { Route } from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/neworders" element={<NewOrder />} />
      <Route path="/orders" element={<Orders/>} />
      <Route path="/claimOrder" element={<ClaimOrder />} />
    </Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router} />
  </StrictMode>,
)
