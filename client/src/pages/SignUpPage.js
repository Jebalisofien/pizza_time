
import {  useNavigate} from "react-router-dom";
import React from "react";
import userController from "../controllers/userController";


function SignUpPage() {
    const controller = userController();
    const navigate = useNavigate();
    const handleSignup = async (e) => {
        e.preventDefault();
        await controller.signup();
        navigate("/signin")
    }
    return (
        <form onSubmit={handleSignup}> 
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.firstName}
                type="string"
                name="firstName"
            />
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.lastName}
                type="string"
                name="lastName"
            />
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.address}
                type="string"
                name="address"
            />
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.city}
                type="string"
                name="city"
            />
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.state}
                type="string"
                name="state"
            />
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.email}
                type="email"
                name="email"
            />
            <input
                onChange={controller.updateRegisterForm}
                value={controller.loginRegForm.password}
                type="password"
                name="password"
            />
            <button type="submit">Register</button>
            
        </form>
        
    );
}


    export default SignUpPage;