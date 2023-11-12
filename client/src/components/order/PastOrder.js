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
        <div class= "nav justify-content-center" key={order._id}>
            <div class="form-control mb-2">
            
            <p> Method :{order.method}</p>
            <p>QTE :{ order.qty}</p>
            <p>Size :{order.size}</p>
            <p>Crust :{order.crust}</p>
            <p>Toppings :{order.toppings}</p>
            <p><h5>Price : { order.qty*10}$</h5></p>
            </div>
        <input type="checkbox" id="favorite" name="favorite" onChange={handleChange} />
            <label htmlFor="favorite"> Favorite</label>
    </div>
    );
}