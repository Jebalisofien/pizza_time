import Order from "./order.single";
import ordersController from "../../controllers/orders.controller";
export default function Orders() {
    const controller = ordersController();

    return (
    <div>
        <h2>Orders:</h2>
        {controller.orders &&
        controller.orders.map((order) => {
            return <Order order={order} key={order._id} />;
        })}
    </div>
    );
}