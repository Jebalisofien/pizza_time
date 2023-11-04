import './App.css';
import { useState, useEffect } from "react";
import Orders from './components/order/order.index'
import CreateOrder from './components/order/order.store'
import ordersController from './controllers/orders.controller';
function App() {
  const controller = ordersController();

  // Use effect
  useEffect(() => {
    controller.fetchOrders();
  }, []);

  return (
    <div className="App">
      <Orders />
      <CreateOrder />
    </div>
  );
}


export default App;
