import './App.css';
import { useState, useEffect } from "react";
import OrdersPage from "./pages/OrdersPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RequireAuth from './middelware/RequireAuth';



function App() {

  return (
    <div className="App">

      
      <BrowserRouter>

      <ul>
        <li> <Link to="/">Home</Link> </li>
        <li> <Link to="/signin">SignIn</Link> </li>
        <li> <Link to="/signup">Register account</Link> </li>
        <li> <Link to="/orders">Orders</Link> </li>
      </ul>      
        <Routes>
          <Route index element={<RequireAuth><HomePage /></RequireAuth>}/>
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />

          <Route path='/orders' element={<OrdersPage />} />
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
