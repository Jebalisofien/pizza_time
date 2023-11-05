import Order from "./Order";
import ordersController from "../../controllers/ordersController";
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