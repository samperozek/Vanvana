
import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"


function NavigationBar({handleLoginSubmit, handleLogout, loggedInUser}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loggedInUserInfo, setLoggedInUserInfo] = useState(null)

    // useEffect(()=>{
    //     fetch("/userInSession")
    //     .then(r => r.json())
    //     .then(userAlreadyLoggedIn => {setLoggedInUserInfo(userAlreadyLoggedIn)})
    //   }, [])

    const handleLogin = (synthEvent) => {
        synthEvent.preventDefault()
        let newUser = {username: username, password: password}
        handleLoginSubmit(newUser)
    }

    const handleLogoutNavBar = (e) =>{
        e.preventDefault()
        handleLogout()
    }


    return(<>
            <div class="navMaster">
                <ul>
                    <li><a class="nav-item nav-link" href="/landingpage">Home</a></li>
                    <li><a class="nav-item nav-link" href="/vans">Browse Vans</a></li>
                    <li><a class="nav-item nav-link" href="/newregistration">New Listing</a></li>
                    <li><a class="nav-item nav-link" href="/contactus">Contact Us</a></li>
                    <li><a class="nav-item nav-link" href="/signup">Sign Up</a></li>
                    
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