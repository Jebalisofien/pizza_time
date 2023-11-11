

export default function Order({ order }) {
    

    return (
    <div style= {{textAlign: "left",border: "1px solid black", maxWidth: "500px", margin: "10px auto"}} key={order._id}>
        <p>{order.method}</p>
        <p>{order.qty}</p>
        <p>{order.size}</p>
        <p>{order.crust}</p>
        <p>{order.toppings}</p>
        
    </div>
    );
}