
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
        
    <div className="App">
        <div class="row">
    <div class="nav justify-content-center">
        <div class="col-sm-6">
            <h2>Account Info</h2>
        <form onSubmit={handleAccountUpdate}> 
        <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
            <input class="form-control is-valid" placeholder="First Name"
                onChange={uController.updateRegisterForm}
                value={uController.loginRegForm.firstName}
                type="string"
                name="firstName"
            />
            </div></div>
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    <input class="form-control is-valid" placeholder="Last Name"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.lastName}
                        type="string"
                        name="lastName"
                    />
            </div></div>
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    <input class="form-control is-valid" placeholder="Address"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.address}
                        type="string"
                        name="address"
                    />
            </div></div>
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    <input class="form-control is-valid" placeholder="City"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.city}
                        type="string"
                        name="city"
                    />
            </div></div>
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    <input class="form-control is-valid" placeholder="State"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.state}
                        type="string"
                        name="state"
                    />
            </div></div>
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    <input class="form-control is-valid" placeholder="Email"
                        onChange={uController.updateRegisterForm}
                        value={uController.loginRegForm.email}
                        type="email"
                        name="email"
                    />
            </div></div>
            
            <button class="btn btn-primary mb-2" type="submit">Update</button>
            
        </form>
        
    
        </div>

        <div class="col-md-4 mb-3" >
            <h2>Past Orders:</h2>
            {oController.orders &&
            oController.orders.map((order) => {
                return <PastOrder order={order} key={order._id} />;
            })}
            
        </div>
    </div></div></div>
    );
}