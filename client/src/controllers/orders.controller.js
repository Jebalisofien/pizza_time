import create from "zustand";
import axios from "axios";

const ordersController = create((set) => ({
    orders: null,

    orderModel: {
      method:"",
      size:"",
      crust:"",
      qty:"",
      toppings:""
    },

    fetchOrders: async () => {
    // Fetch the orders
      const res = await axios.get("http://localhost:5000/api/orders");
      
      // Set to state
      set({ orders: res.data.orders });
    },

    updateCreateOrderField: (e) => {
      const { name, value } = e.target;

      set((state) => {
          return {
          orderModel: {
              ...state.orderModel,
              [name]: value,
          },
          };
      });
    },

    createOrder: async (e) => {
      e.preventDefault();
      const { orderModel, orders } = ordersController.getState();
      console.log(orderModel); 
      const res = await axios.post("http://localhost:5000/api/orders", orderModel);

      set({
          orders: [...orders, res.data.order],
          orderModel: {
            method:"",
            size:"",
            crust:"",
            qty:"",
            toppings:""
          },
      });
  },
}));

export default ordersController;