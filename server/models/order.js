const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    method: String,
    size: String,
    crust: String,
    qty: String,
    toppings: String,
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;