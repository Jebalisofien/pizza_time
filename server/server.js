
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
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
connectToDb();


app.get('/', (req, res) => {
    res.json({Hello: "world"})
});



// Routing
  //User
  app.post("/api/signup", usersController.signup);
  app.post("/api/login", usersController.login);
  app.get("/api/logout", usersController.logout);
  app.get("/api/check-auth", requireAuth, usersController.checkAuth);
  // Order
  app.get("/api/orders", requireAuth, ordersController.fetchOrders);
  app.get("/api/orders/:id", requireAuth, ordersController.fetchOrder);
  app.post("/api/orders", requireAuth, ordersController.createOrder);



app.listen(process.env.PORT);