import React, { useState } from 'react';
import ordersController from '../../controllers/ordersController';

import { useNavigate } from "react-router-dom";


export default function CreateOrder() {
    const navigate= useNavigate();
    const controller = ordersController();
    const handleSubmit= async (e) => {
        e.preventDefault();
        try
        {

            controller.createOrder();
            navigate ("/cart");
        }
        catch(e){
            console.log(e)
        }
    }
    

    return (
    
    
    <div>
            <h2>Create order</h2>
            <form onSubmit={handleSubmit}>
            
            
            <select name="method" onChange={controller.updateCreateOrderField} value={controller.orderModel.method}>
                <option value="CarryOut">CarryOut</option>
                <option value="Delivery">Delivery</option>
                <option value="InPlace">InPlace</option>
            </select>
            <select name="size" onChange={controller.updateCreateOrderField} value={controller.orderModel.size}>
                <option value="Large">Large</option>
                <option value="Medium">Medium</option>
                <option value="Small">Small</option>
            </select>
            <select name="crust" onChange={controller.updateCreateOrderField} value={controller.orderModel.crust}>
                <option value="ThinCrust">Thin Crust</option>
                <option value="ThickCrust">Thick Crust</option>
                <option value="StandardCrust">Standard Crust</option>
            </select>
            <select name="qty" onChange={controller.updateCreateOrderField} value={controller.orderModel.qty}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                
            </select>
            <input type="checkbox" id="pepperoni" name="pepperoni" onChange={controller.updateCreateOrderCheckbox} />
            <label htmlFor="pepperoni"> Pepperoni</label>
            <input type="checkbox" id="cheese" name="cheese" onChange={controller.updateCreateOrderCheckbox} />
            <label htmlFor="cheese"> Cheese</label>
            <input type="checkbox" id="meat" name="meat" onChange={controller.updateCreateOrderCheckbox} />
            <label htmlFor="meat"> Meat</label>
            
            
            
           
            


            <button type="submit">Create order</button>
            </form>
        </div>
    
    );

}