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
            <h2>CRAFT - A - PIZZA</h2>
            <form onSubmit={handleSubmit} >
            
            <div class="nav justify-content-center">
                <div class="col-md-4 mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label"><h4>Method: </h4></label>
                    <select class="form-control mb-2" name="method" onChange={controller.updateCreateOrderField} value={controller.orderModel.method}>
                        <option value="CarryOut">CarryOut</option>
                        <option value="Delivery">Delivery</option>
                        <option value="InPlace">InPlace</option>
                    </select>
            </div></div>
                <div class="nav justify-content-center">
                    <div class="col-md-4 mb-3">
                        <label for="inputPassword" class="col-sm-2 col-form-label"><h4>Size: </h4></label>
                        <select class="form-control mb-2" name="size" onChange={controller.updateCreateOrderField} value={controller.orderModel.size}>
                            <option value="Large">Large</option>
                            <option value="Medium">Medium</option>
                            <option value="Small">Small</option>
                        </select>
            </div></div>
                <div class="nav justify-content-center">
                    <div class="col-md-4 mb-3">
                        <label for="inputPassword" class="col-sm-2 col-form-label"><h4>Crust: </h4></label>
                        <select class="form-control mb-2" name="crust" onChange={controller.updateCreateOrderField} value={controller.orderModel.crust}>
                            <option value="ThinCrust">Thin Crust</option>
                            <option value="ThickCrust">Thick Crust</option>
                            <option value="StandardCrust">Standard Crust</option>
                        </select>
            </div></div>
            <div class="nav justify-content-center">
                    <div class="col-md-4 mb-3">
                    <label for="inputPassword" class="col-sm-2 col-form-label"><h4>Qte: </h4></label>
                        <select class="form-control mb-2" name="qty" onChange={controller.updateCreateOrderField} value={controller.orderModel.qty}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            
                        </select>
            </div></div>
            <div class="form-group">
                    <div class="form-control">
                    <label for="inputPassword" class="col-sm-2 col-form-label"><h4>Toppings: </h4> </label>
                    <input type="checkbox" id="pepperoni" name="pepperoni" onChange={controller.updateCreateOrderCheckbox} />
                    <label htmlFor="pepperoni"> Pepperoni</label>
                    <input type="checkbox" id="cheese" name="cheese" onChange={controller.updateCreateOrderCheckbox} />
                    <label htmlFor="cheese"> Cheese</label>
                    <input type="checkbox" id="meat" name="meat" onChange={controller.updateCreateOrderCheckbox} />
                    <label htmlFor="meat"> Meat</label>
            </div></div>
            
            <button class="btn btn-primary mb-2" type="submit">Create order</button>
            </form>
        </div>
    
    );

}