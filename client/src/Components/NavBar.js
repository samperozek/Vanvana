
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
            {/* <div class = "navMaster">
            <nav>
            <a class="navbar-brand" href="#">Vanvana</a>
            <div class="navbar-nav">
                <li></li><a class="nav-item nav-link" href="/landingpage">Home</a>
                <a class="nav-item nav-link" href="/vans">Search Vans</a>
                <a class="nav-item nav-link" href="/newregistration">New Listing</a>
                <a class="nav-item nav-link" href="/contactus">Contact Us</a>
                <a class="nav-item nav-link" href="login">Account Login</a> 
                <a class="nav-item nav-link" href="signup">Sign Up</a>
                
                <div class = "nav_login">
                    <form action={console.log("Hi")}>
                        <input type="text" placeholder="Username" name="username"/>
                        <input type="text" placeholder="Password" name="psw"/>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div> 
            </nav>
            </div> */}

            <div class="navMaster">
                <ul>
                    <li><a class="nav-item nav-link" href="/landingpage">Home</a></li>
                    <li><a class="nav-item nav-link" href="/vans">Search Vans</a></li>
                    <li><a class="nav-item nav-link" href="/newregistration">New Listing</a></li>
                    <li><a class="nav-item nav-link" href="/contactus">Contact Us</a></li>
                    
                        <div class = "nav_login">
                            <form action={console.log("Hi")}>
                                <input type="text" placeholder="Username" name="username"/>
                                <input type="text" placeholder="Password" name="psw"/>
                                <button type="submit">Login</button>
                            </form>
                        </div>
                    
                </ul>
            </div>

            {/* <div class="topnav">
            <a class="active" href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <div class="login-container">
                <form action={console.log("Hi")}>
                <input type="text" placeholder="Username" name="username"/>
                <input type="text" placeholder="Password" name="psw"/>
                <button type="submit">Login</button>
                </form>
            </div>
            </div>    */}
    
    </>
        
    )
}

export default NavigationBar