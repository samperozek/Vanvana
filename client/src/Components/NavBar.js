
import React from "react"
import { NavLink } from "react-router-dom"


function NavigationBar() {
    return(<>
            {/* <div className="navBar">
            <NavLink to="/landingPage">
                <h4>Home</h4>
            </NavLink>
            
            <NavLink to="vans">
                <h4>Vans for Sale</h4>   
            </NavLink>
            
            {/* <NavLink to="newregistration">
                <h4>New Listing</h4>
            </NavLink> */}

            {/* <NavLink to="contactus">
                <h4>Contact Us</h4>
            </NavLink> */}
{/* 
            <NavLink to="login">
                <h4>Account Login</h4>
            </NavLink>

            <NavLink to="signup">
                <h4>Sign Up</h4>
            </NavLink>
            </div> */} 

            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <a class="navbar-brand" href="#">Vanvana</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link" href="/landingpage">Home <span class="sr-only">(current)</span></a>
                <a class="nav-item nav-link" href="/vans">Search Vans</a>
                <a class="nav-item nav-link" href="/contactus">Contact Us</a>
                <a class="nav-item nav-link" href="login">Account Login</a>
                <a class="nav-item nav-link" href="signup">Sign Up</a>
            </div>
            </div>
            </nav>
               
    
    </>
        
    )
}

export default NavigationBar