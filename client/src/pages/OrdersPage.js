import {  useEffect } from "react";

import Orders from '../components/order/OrderList';
import CreateOrder from '../components/order/OrderCreate';
import ordersController from '../controllers/ordersController';

function OrdersPage() {
    // Use effect
    useEffect(() => {
        ordersController.fetchOrders();
    }, []);

    return (
        <div className="App">
        <Orders />
        <CreateOrder />
        </div>
    );
    }


    export default OrdersPage;
