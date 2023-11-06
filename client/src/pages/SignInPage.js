
import {  useNavigate} from "react-router-dom";
import React from "react";
import userController from "../controllers/userController";


export default function LoginForm() {
    
    const controller = userController();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        await controller.login();
        navigate("/")
    }
    return (
        <form onSubmit={handleLogin}> 
            <input
                onChange={controller.updateLoginForm}
                value={controller.loginForm.email}
                type="email"
                name="email"
            />
            <input
                onChange={controller.updateLoginForm}
                value={controller.loginForm.password}
                type="password"
                name="password"
            />
            <button type="submit">Login</button>
            
        </form>
        
    );
}