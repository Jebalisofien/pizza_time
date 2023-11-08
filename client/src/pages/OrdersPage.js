import {  useEffect } from "react";

import Orders from '../components/order/OrderList';

import ordersController from '../controllers/ordersController';

function OrdersPage() {
    const controller = ordersController ()
    // Use effect
    useEffect(() => {
        controller.fetchOrders();
    }, []);

    return (
        <div className="App">
        <Orders />
        
        </div>
    );
    }


    export default OrdersPage;
