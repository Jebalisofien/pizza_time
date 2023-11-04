import ordersController from "../../controllers/orders.controller";

export default function CreateForm() {
    const controller = ordersController();

    if (controller.updateForm._id) return <></>;

    return (
    
    
    <div>
            <h2>Create order</h2>
            <form onSubmit={controller.createOrder}>
            <input
                onChange={controller.updateCreateFormField}
                value={controller.createForm.method}
                name="method"
            />
            <input
                onChange={controller.updateCreateFormField}
                value={controller.createForm.size}
                name="size"
            />
            <input
                onChange={controller.updateCreateFormField}
                value={controller.createForm.crust}
                name="crust"
            />
            <input
                onChange={controller.updateCreateFormField}
                value={controller.createForm.qty}
                name="qty"
            />
            <input
                onChange={controller.updateCreateFormField}
                value={controller.createForm.toppings}
                name="toppings"
            />
            
            <button type="submit">Create order</button>
            </form>
        </div>
    
    );

}