
require("dotenv").config();

  // Import dependencies
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectToDb = require("./config/connectToDb");

const Order = require("./models/order")
const ordersController = require("./controllers/ordersController");
const usersController = require("./controllers/usersController");
const requireAuth = require("./middleware/requireAuth");
const app = express();



const corsOptions ={
  origin:'http://localhost:3000',
  credentials: true
}
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

connectToDb();




// Routing
  //User
  app.post("/api/signup", usersController.signup);
  app.post("/api/login", usersController.login);
  app.get("/api/logout", usersController.logout);
  app.get("/api/check-auth", requireAuth,  usersController.checkAuth);
  app.post("/api/update-account", requireAuth,  usersController.updateAccount);
  // Order
  app.get("/api/orders", requireAuth, ordersController.fetchOrders);
  app.get("/api/cart", requireAuth, ordersController.fetchCart);
  app.get("/api/purchase", requireAuth, ordersController.purchaseOrders);
  app.get("/api/favorite", requireAuth, ordersController.favoriteOrders);
  app.get("/api/clear", requireAuth, ordersController.deleteOrders);
  app.get("/api/check-orders", requireAuth, ordersController.checkOrders);
  app.get("/api/orders/:id", requireAuth, ordersController.fetchOrder);
  app.post("/api/orders", requireAuth, ordersController.createOrder);



app.listen(process.env.PORT);