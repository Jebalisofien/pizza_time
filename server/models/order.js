const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    method: {type: String},
    size: {type: String},
    crust: {type: String},
    qty: {type: String},
    toppings: {type: Object},
    is_favorite: {type: Boolean, default: false},
    is_purchased: {type: Boolean, default: false},
    price: {type: Number},
    
    user:{ type: mongoose.Schema.Types.ObjectId,  
        ref:"User", },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;