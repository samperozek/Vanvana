
import React, { useState } from "react"
import { useHistory } from "react-router-dom"

import LandingPage from "./LandingPage"

function NavigationBar({handleLoginSubmit, handleLogout, loggedInUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUserInfo, setLoggedInUserInfo] = useState(null)

    const history = useHistory()

    const handleLogin = (synthEvent) => {
        synthEvent.preventDefault()
        let newUser = {username: username, password: password}
        console.log("made it through the navbar handleLogin", newUser)
        handleLoginSubmit(newUser)
    }

    const handleLogoutNavBar = (e) =>{
        e.preventDefault()
        handleLogout()
        history.push('/LandingPage')
    }


    return(<>
            <div class="navMaster">
                <ul>
                    <li><a class="nav-item nav-link" href="/LandingPage">Home</a></li>
                    <li><a class="nav-item nav-link" href="/vans">Browse Vans</a></li>
                    <li><a class="nav-item nav-link" href="/NewRegistration">New Listing</a></li>
                    {/* <li><a class="nav-item nav-link" href="/ContactUs">Contact Us</a></li> */}
                    <li><a class="nav-item nav-link" href="/SignUp">Sign Up</a></li>
                    <li><a class="nav-item nav-link" href="/MyAccount">My Account</a></li>
                        <div class = "nav_login">
                            {loggedInUser?
                                    <><h2>Welcome {loggedInUser.username}!</h2></>
                                    : <></>}
                            <form onSubmit = {handleLogin}>

                                <input 
                                className="navInput"
                                type="text" 
                                placeholder="Username" 
                                name="username"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                }}
                                />

                                <input 
                                className="navInput"
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                }}
                                />
                               
                                {loggedInUser?
                                <button onClick = {handleLogoutNavBar}>Logout</button>
                                : <button>Login</button>}

                            </form>
                        </div>
                    
                </ul>
            </div>

         
    
    </>
        
    )
}

export default NavigationBar