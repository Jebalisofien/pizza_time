import './App.css';
import { useState, useEffect } from "react";
import OrdersPage from "./pages/OrdersPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';



function App() {

  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />}/>
          <Route path='/SignIn' element={<SignInPage />} />
          <Route path='/SignUp' element={<SignUpPage />} />

          <Route path='/Orders' element={<OrdersPage />} />
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
