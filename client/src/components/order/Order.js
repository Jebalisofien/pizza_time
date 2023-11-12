

export default function Order({ order }) {
    
    
    

    return (
    <div class= "nav justify-content-center" key={order._id}>
        <div class="form-control mb-2">
        <p> Method :{order.method}</p>
        <p>QTE :{ order.qty}</p>
        <p>Size :{order.size}</p>
        <p>Crust :{order.crust}</p>
        <p>Toppings :{order.toppings}</p>
        
    </div>
        
        <p><h5>Price : { order.qty*10}$</h5></p>
    </div>
    );
}