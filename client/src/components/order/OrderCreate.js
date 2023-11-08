import ordersController from "../../controllers/ordersController";

export default function CreateOrder() {
    const controller = ordersController();

    return (
    
    
    <div>
            <h2>Create order</h2>
            <form onSubmit={controller.createOrder}>
            
            
            <select name="method" onChange={controller.updateCreateOrderField} value={controller.orderModel.method}>
                <option value="CarryOut">CarryOut</option>
                <option value="Delivery">Delivery</option>
                <option value="InPlace">InPlace</option>
            </select>
            <select name="size" onChange={controller.updateCreateOrderField} value={controller.orderModel.size}>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
            </select>
            <select name="crust" onChange={controller.updateCreateOrderField} value={controller.orderModel.crust}>
                <option value="ThinCrust">Thin Crust</option>
                <option value="ThickCrust">Thick Crust</option>
                <option value="StandardCrust">Standard Crust</option>
            </select>
            <select name="qty" onChange={controller.updateCreateOrderField} value={controller.orderModel.qty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                
            </select>
            
            <input type="checkbox" name="pepperoni" onChange={controller.updateCreateOrderCheckbox}  />
                
            


            <button type="submit">Create order</button>
            </form>
        </div>
    
    );

}