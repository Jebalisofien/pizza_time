

export default function Order({ order }) {
    

    return (
    <div key={order._id}>
        <h3>{order.method}</h3>
        
    </div>
    );
}