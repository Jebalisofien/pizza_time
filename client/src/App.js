import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    // State
  const [orders, setOrders] = useState(null);
  const [createForm, setCreateForm] = useState({
    method:"",
    size:"",
    crust:"",
    qty:"",
    toppings:""
  });
  

  // Use effect
  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    // Fetch the orders
    const res = await axios.get('http://localhost:5000/api/orders');

    // Set to state
    setOrders(res.data.orders);
  };

  

  const createOrder = async (e) => {
    e.preventDefault();

    const res = await axios.post('http://localhost:5000/api/orders', createForm);

    setOrders([...orders, res.data.order]);

    setCreateForm({
    method:"",
    size:"",
    crust:"",
    qty:"",
    toppings:""
    });
  };

  
  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };
  

  


  return (
    <div className="App">
      
      <div>
        <h2>Orders:</h2>
        {orders &&
          orders.map((order) => {
            return (
              <div key={order._id}>
                <h3>{order.method}</h3>
                
                
              </div>
            );
          })}
      </div>
      { (
        <div>
          <h2>Create order</h2>
          <form onSubmit={createOrder}>
            <input
              onChange={updateCreateFormField}
              value={createForm.method}
              name="method"
            />
            <input
              onChange={updateCreateFormField}
              value={createForm.size}
              name="size"
            />
            <input
              onChange={updateCreateFormField}
              value={createForm.crust}
              name="crust"
            />
            <input
              onChange={updateCreateFormField}
              value={createForm.qty}
              name="qty"
            />
            <input
              onChange={updateCreateFormField}
              value={createForm.toppings}
              name="toppings"
            />
            
            <button type="submit">Create order</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
