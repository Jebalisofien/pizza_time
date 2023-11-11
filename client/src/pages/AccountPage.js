import {  useEffect } from "react";

import Orders from '../components/order/OrderList';
import Account from '../components/auth/Account';

import ordersController from '../controllers/ordersController';

function AccountPage() {
    const controller = ordersController ()
    // Use effect
    useEffect(() => {
        controller.fetchOrders();
    }, []);

    return (
        <div className="App">
        
        <Account />
        
        </div>
    );
    }

    export default AccountPage;