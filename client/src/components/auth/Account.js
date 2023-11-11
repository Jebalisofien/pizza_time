
import ordersController from "../../controllers/ordersController";
import userController from "../../controllers/userController";
import PastOrder from "../order/PastOrder";
export default function Account() {

    const oController = ordersController();
    const uController = userController();
    //const navigate = useNavigate();
    const handleAccountUpdate = async (e) => {
        e.preventDefault();
        await uController.updateAccount();
        //navigate("/account")
    }

    return (
        
    <div>
        <div>
        <form onSubmit={handleAccountUpdate}> 
            <input
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.firstName}
                type="string"
                name="firstName"
            />
            <input
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.lastName}
                type="string"
                name="lastName"
            />
            <input
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.address}
                type="string"
                name="address"
            />
            <input
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.city}
                type="string"
                name="city"
            />
            <input
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.state}
                type="string"
                name="state"
            />
            <input
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.email}
                type="email"
                name="email"
            />
            
            <button type="submit">Register</button>
            
        </form>
        
    
        </div>

        <div>
            <h2>Orders:</h2>
            {oController.orders &&
            oController.orders.map((order) => {
                return <PastOrder order={order} key={order._id} />;
            })}
        </div>
    </div>
    );
}