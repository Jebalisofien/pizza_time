import {  useEffect } from "react";
import ordersController from '../controllers/ordersController';
import Cart from "../components/order/Cart";


function CartPage() {
    const controller = ordersController ()
    // Use effect
    useEffect(() => {
        controller.fetchCart();
    }, []);

    return (
        <div className="App">
        <Cart />
        
        </div>
    );
    }


    export default CartPage;
