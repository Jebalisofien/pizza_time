import { Link } from "react-router-dom";



function HomePage() {
    
    

    return (
        <div className="App">
            <h3>Quick Order</h3>
        <div class="row">
        <div class="nav justify-content-center">
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">New Order</h5>
                    <p class="card-text">You can choose your pizza now</p>
                    <Link to="/order">New pizza</Link>    
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">My Favorite Pizza</h5>
                    <p class="card-text">Your Favorite Pizza is Here</p>
                    <Link to="/order">Re-Order My Fav</Link> 
                </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title">Surprise Me</h5>
                    <p class="card-text">we can choose a random pizza for you</p>
                    <Link to="/order">Surprise Me</Link> 
                </div>
                </div>
            </div>
        </div>




            
        </div>
        
        </div>
    );
    }


    export default HomePage;