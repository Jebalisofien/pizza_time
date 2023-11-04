
require("dotenv").config();

  // Import dependencies
const express = require("express");
const connectToDb = require('./config/connectToDb')
const Order = require("./models/order")
const ordersController = require("./controllers/orders.controller");




const app = express();

app.use(express.json());

connectToDb();


app.get('/', (req, res) => {
    res.json({Hello: "world"})
});



// Routing
app.get("/orders", ordersController.fetchOrders);
app.get("/orders/:id", ordersController.fetchOrder);
app.post("/orders", ordersController.createOrder);



app.listen(process.env.PORT);