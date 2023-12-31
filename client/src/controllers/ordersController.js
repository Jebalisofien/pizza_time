import create from "zustand";
import axios from "axios";



const ordersController = create((set) => ({
    orders: [],
    pendingOrders: null,
    
    orderModel: {
        method:"",
        size:"",
        crust:"",
        qty:"",
        toppings:[],
        is_purchased: false,
        is_favorite: false
    },

    

    fetchOrders: async () => {
    // Fetch the orders
        const res = await axios.get("/api/orders");
        
      // Set to state
        set({ orders: res.data.orders });
    },
    fetchCart: async () => {
    // Fetch the Cart
        const res = await axios.get("/api/cart");
        
      // Set to state
        set({ orders: res.data.orders });
    },
    purchaseOrders: async () => {
    // Fetch the Cart
        const res = await axios.get("/api/purchase");
        
      // Set to state
        //set({ orders: res.data.orders });
    },
    deleteOrders: async () => {
    // Fetch the Cart
        const res = await axios.get("/api/clear");
        
      // Set to state
        //set({ orders: res.data.orders });
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

    updateCreateOrderCheckbox: (e) => {
        const { name, checked } = e.target;
 
        set((state) => {
            const { toppings } = state.orderModel;
            // Case 1 : The user checks the box
            if (checked) {
                return {
                orderModel: {
                    ...state.orderModel,
                    toppings: [...toppings, name]
                },
                };
            }
            // Case 2  : The user unchecks the box
            else {
                return {
                orderModel: {
                    ...state.orderModel,
                    toppings: toppings.filter( (e) => e !== name),
                }
                };
            }
        });
    },
    updateFavorite: (e)  => {
        const { name, checked } = e.target;

        set(async (state) => {
            const { is_favorite } = state.orderModel;
            //const { order } = requestedorder;
            // Case 1 : The user checks the box
            if (checked) {
                await axios.post("/api/favorite") .then(res=>{
                    
                })
        
                .catch(err=>{ console.log(err.response.data.errors)});
                
            }
            // Case 2  : The user unchecks the box
            else {
                
            }
        });
    },

    checkOrders: async () => {
        
        await axios.get("/api/check-orders") .then(res=>{
        set({ pendingOrders: res.data });
        
        
        })
        
        .catch(err=>{ console.log(err.response.data.errors)});
        
        
    },


    createOrder: async () => {
        
        const { orderModel, orders } = ordersController.getState();
        console.log(orderModel); 
        const res = await axios.post("/api/orders", orderModel);
        

        set({
            orders: [...orders, res.data.order],

            orderModel: {
            method:"",
            size:"",
            crust:"",
            qty:"",
            is_purchased: false,
            toppings: orderModel.toppings
            },
        });
        
        
    },
    
}));

export default ordersController;