import { useState, useEffect } from "react";

import ordersController from "../../controllers/ordersController";

export default function CheckOrders() {
    const oController = ordersController();
    useState(() => {

      
        oController.checkOrders()
  }, []);

    return (
    <span >
        ({oController.pendingOrders})
        
    </span>
    );
}