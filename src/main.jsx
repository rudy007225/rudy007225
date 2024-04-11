import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Login from './Public/Login.jsx'
import Home from './Public/Home.jsx'
import Register from './Public/Register.jsx'
import Wishlist from './Private/Customer/Wishlist.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        <Route path ='/' element={<App />}>
        <Route path ='/login' element={<Login />}/>
        <Route path ='/' element={<Home />}/>
        <Route path ='/register' element={<Register />}/>
        <Route path ='/wishlist' element={<Wishlist />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
