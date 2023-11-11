import './App.css';
import { useState, useEffect } from "react";
import OrdersPage from "./pages/OrdersPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import SignInPage from './pages/SignInPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import RequireAuth from './middelware/RequireAuth';
import userController from './controllers/userController';
import orderController from './controllers/ordersController';
import LogoutPage from './pages/LogoutPage';
import CreateOrderPage from './pages/CreateOrderPage';
import CartPage from './pages/CartPage';
import CheckOrders from './components/order/CheckOrders';
import AccountPage from './pages/AccountPage';


function App() {
const controller = userController();

useEffect(() => {
  if (controller.loggedIn === null) {
      controller.checkAuth();
  }
}, []);

      
  return (
    <div className="App">
      <h1>Pizza Pete's</h1>
      <h3>Please register or login to order your Pizza</h3>


      
      <BrowserRouter>
        {controller.loggedIn ?
          (<ul>
              <li> <Link to="/">Home</Link> </li>
              
              <li> <Link to="/cart">Orders<CheckOrders /> </Link> </li>
              <li> <Link to="/account">Account </Link> </li>
              
              <li><Link to="/logout">Logout</Link></li>
          </ul>) :
          (<ul>
              <li><Link to="/signin">SignIn</Link></li>
              <li><Link to="/signup">SignUp</Link></li>
          </ul>)
        }
      
      
        <Routes>
          <Route index element={<RequireAuth><HomePage /></RequireAuth>}/>
          <Route path='/signin' element={<SignInPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/Logout' element={<LogoutPage />} />

          <Route path='/orders' element={<RequireAuth><OrdersPage /></RequireAuth>} />
          <Route path='/cart' element={<RequireAuth><CartPage /></RequireAuth>} />
          <Route path='/order' element={<RequireAuth><CreateOrderPage /></RequireAuth>} />
          <Route path='/account' element={<RequireAuth><AccountPage /></RequireAuth>} />
          

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}


export default App;
