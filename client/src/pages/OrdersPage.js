import {  useEffect } from "react";

import Orders from '../components/order/OrderList';
import CreateOrder from '../components/order/OrderCreate';
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
        <CreateOrder />
        </div>
    );
    }


    export default OrdersPage;
