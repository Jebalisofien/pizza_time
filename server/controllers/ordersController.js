const Order = require("../models/order")


const fetchOrders = async (req, res) => {
    // Find the orders
    const orders = await Order.find();
  
    // Respond with them
    res.json({ orders });
  };
  
  const fetchOrder = async (req, res) => {
    // Get id off the url
    const orderId = req.params.id;
  
    // Find the order using that id
    const order = await Order.findById(orderId);
  
    // Respond with the order
    res.json({ order });
  };
  
  const createOrder= async (req, res) => {
    // Get the sent in data off request body
    const method =req.body.method;
    const size =req.body.size;
    const crust =req.body.crust;
    const qty =req.body.qty;
    const toppings =req.body.toppings;

    const order = await Order.create({

        method :method,
        size :size,
        crust :crust,
        qty :qty,
        toppings :toppings
        
    });
    res.json({order: order});
};

  
    // Create an order with it
    
  
    // respond with the new note


module.exports = {
    fetchOrders,
    fetchOrder,
    createOrder
    
    };
