import ordersController from "../../controllers/ordersController";

export default function PastOrder({ order }) {
    const controller = ordersController();
    const handleChange= async (e) => {
        e.preventDefault();
        try
        {

            controller.updateFavorite(order);
            //navigate ("/cart");
        }
        catch(e){
            console.log(e)
        }
    }

    return (
    <div style= {{textAlign: "left",border: "1px solid black", maxWidth: "500px", margin: "10px auto"}} key={order._id}>
        <p>{order.method}</p>
        <p>{order.qty}</p>
        <p>{order.size}</p>
        <p>{order.crust}</p>
        <p>{order.toppings}</p>
        <input type="checkbox" id="favorite" name="favorite" onChange={handleChange} />
            <label htmlFor="favorite"> Favorite</label>
    </div>
    );
}