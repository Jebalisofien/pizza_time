import ordersController from "../../controllers/ordersController";

export default function CreateOrder() {
    const controller = ordersController();

    return (
    
    
    <div>
            <h2>Create order</h2>
            <form onSubmit={controller.createOrder}>
            <input
                onChange={controller.updateCreateOrderField}
                value={controller.orderModel.method}
                name="method"
            />
            <input
                onChange={controller.updateCreateOrderField}
                value={controller.orderModel.size}
                name="size"
            />
            <input
                onChange={controller.updateCreateOrderField}
                value={controller.orderModel.crust}
                name="crust"
            />
            <input
                onChange={controller.updateCreateOrderField}
                value={controller.orderModel.qty}
                name="qty"
            />
            <input
                onChange={controller.updateCreateOrderField}
                value={controller.orderModel.toppings}
                name="toppings"
            />
            
            <button type="submit">Create order</button>
            </form>
        </div>
    
    );

}