const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {type: String},
    lastName: {type: String},
    address: {type: String},
    city: {type: String},
    state: {type: String},
    email: {type: String},
    password: {type: String},
    order:[{type: mongoose.Schema.Types.ObjectId, ref:"Order"}],
});

const User = mongoose.model("User", userSchema);

module.exports = User;