
require("dotenv").config();

  // Import dependencies
const express = require("express");
const connectToDb = require('./config/connectToDb')
const Order = require("./models/order")




const app = express();

app.use(express.json());

connectToDb();


app.get('/', (req, res) => {
    res.json({Hello: "world"})
})

app.post("/orders", async (req, res) => {
    console.log(req.body);
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
});

app.listen(process.env.PORT);