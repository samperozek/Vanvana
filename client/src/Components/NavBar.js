
import React from "react"
import { NavLink } from "react-router-dom"


function NavigationBar() {
    return(<>
            <div className="navBar">
            <NavLink to="/landingPage">
                <h4>Home</h4>
            </NavLink>
            
            <NavLink to="vans">
                <h4>Vans for Sale</h4>   
            </NavLink>
            
            <NavLink to="newregistration">
                <h4>New Listing</h4>
            </NavLink>

            <NavLink to="contactus">
                <h4>Contact Us</h4>
            </NavLink>

            <NavLink to="login">
                <h4>Account Login</h4>
            </NavLink>

            <NavLink to="signup">
                <h4>Sign Up</h4>
            </NavLink>
            </div>
               
    
    </>
        
    )
}

export default NavigationBar