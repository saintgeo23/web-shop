import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './features/Account/Login/Login';
import Register from './features/Account/Register/Register';
import Account from './features/Account/Account';
import Cart from './features/Cart/Cart';
import Home from './features/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="account/login" element={<Login />} />
        <Route path="account/register" element={<Register />} />
        <Route path="account" element={<Account />} />
        <Route path="cart" element={<Cart />} />
        <Route path="" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
