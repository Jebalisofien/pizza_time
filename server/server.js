
require("dotenv").config();

  // Import dependencies
const express = require("express");
const cors = require("cors");
const connectToDb = require('./config/connectToDb')
const Order = require("./models/order")
const ordersController = require("./controllers/orders.controller");




const app = express();
app.use(cors());
app.use(express.json());

connectToDb();


app.get('/', (req, res) => {
    res.json({Hello: "world"})
});



// Routing
app.get("/api/orders", ordersController.fetchOrders);
app.get("/api/orders/:id", ordersController.fetchOrder);
app.post("/api/orders", ordersController.createOrder);



app.listen(process.env.PORT);