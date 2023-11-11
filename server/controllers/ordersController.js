const { json } = require("express");
const Order = require("../models/order")


const fetchOrders = async (req, res) => {
  // Find the orders
  const orders = await Order.find({ user: req.user._id });

  // Respond with them
  res.json({ orders });

};
const fetchCart = async (req, res) => {
  // Find the orders
  const orders = await Order.find({ user: req.user._id, is_purchased: false });

  // Respond with them
  res.json({ orders });

};
const checkOrders = async (req, res) => {
  // Find the orders
  const orders = await Order.find({ user: req.user._id, is_purchased: false });
  const count = orders.length;
  console.log(count);
  // Respond with them
  res.json(count);

};
const purchaseOrders = async (req, res) => {
  // Find the orders
  const orders = await Order.find({ user: req.user._id, is_purchased: false });

  orders.forEach(async (item) => {
    if(item.is_purchased === false) {
        
        await Order.findByIdAndUpdate(item._id, {
          is_purchased: true,
        });
    }
    console.log(item.is_purchased)
  })
        
  // Respond with them
  res.json({ orders });

};
const favoriteOrders = async (req, res) => {
  // Find the orders
  const currentFavorite = await Order.find({ user: req.user._id, is_favorite: true });
  await Order.findByIdAndUpdate(currentFavorite._id, {
    is_favorite: false,
  });
  await Order.findByIdAndUpdate(req.order._id, {
    is_favorite: true,
  });
  
        
  // Respond with them
  res.json( "favorite_Updated" );

};
const deleteOrders = async (req, res) => {
  // Find the orders
  const orders = await Order.find({ user: req.user._id, is_purchased: false });

  orders.forEach(async (item) => {
    if(item.is_purchased === false) {
        await Order.findByIdAndDelete(item._id);
    }
    
  })
        
  // Respond with them
  res.json( "cleared" );

};

const fetchOrder = async (req, res) => {
  // Get id off the url
  const orderId = req.params.id;

  // Find the order using that id
  const order = await Order.findOne({ _id: orderId, user: req.user._id });

  // Respond with the order
  res.json({ order });
};

const createOrder = async (req, res) => {
  // Get the sent in data off request body
  const method = req.body.method;
  const size = req.body.size;
  const crust = req.body.crust;
  const qty = req.body.qty;
  const toppings = req.body.toppings;

  const order = await Order.create({

    method: method,
    size: size,
    crust: crust,
    qty: qty,
    toppings: toppings,
    user: req.user._id,

  });
  res.json({ order: order });
};


// Create an order with it


// respond with the new note


module.exports = {
  fetchOrders,
  fetchOrder,
  createOrder,
  checkOrders,
  fetchCart,
  purchaseOrders,
  deleteOrders,
  favoriteOrders

};
