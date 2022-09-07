
import React, {useState} from "react"
import { NavLink } from "react-router-dom"


function NavigationBar({handleLoginSubmit, handleLogout}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userLoggedIn, setUserLoggedIn] = useState("")

    const handleLogin = (synthEvent) => {
        synthEvent.preventDefault()
        let newUser = {username: username, password: password}
        handleLoginSubmit(newUser)
        setUserLoggedIn(newUser)
    }

    return(<>
            <div class="navMaster">
                <ul>
                    <li><a class="nav-item nav-link" href="/landingpage">Home</a></li>
                    <li><a class="nav-item nav-link" href="/vans">Search Vans</a></li>
                    <li><a class="nav-item nav-link" href="/newregistration">New Listing</a></li>
                    <li><a class="nav-item nav-link" href="/contactus">Contact Us</a></li>
                    
                        <div class = "nav_login">
                            <form onSubmit = {handleLogin}>

                                <input 
                                type="text" 
                                placeholder="Username" 
                                name="username"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                    console.log(username)
                                }}
                                />

                                <input 
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                    console.log(password)
                                }}
                                />
                               
                                {userLoggedIn?
                                (<><h2>Welcome {userLoggedIn.username}!</h2>
                                <button onClick = {handleLogout}>Logout</button></>)
                                : <button>Login</button>}

                                
                            </form>
                        </div>
                    
                </ul>
            </div>

         
    
    </>
        
    )
}

export default NavigationBar