const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String,
    state: String,
    email: String,
    password: String
});

const User = mongoose.model("User", userSchema);

module.exports = User;