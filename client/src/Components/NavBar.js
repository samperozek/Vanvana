
import React, {useState, useEffect} from "react"
import { NavLink } from "react-router-dom"


function NavigationBar({handleLoginSubmit, handleLogout}) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [userLoggedIn, setUserLoggedIn] = useState("")

    useEffect(()=>{
        fetch("/userInSession")
        .then(r => r.json())
        .then(userAlreadyLoggedIn => {setUserLoggedIn(userAlreadyLoggedIn)})
      }, [])

    const handleLogin = (synthEvent) => {
        synthEvent.preventDefault()
        let newUser = {username: username, password: password}
        handleLoginSubmit(newUser)
        setUserLoggedIn(newUser)
    }

    const logout = (e) => {
        fetch(  "/logout" , { method: "DELETE" }  )
    .then( r => r.json() )
    .then( deleteResponse =>{setUserLoggedIn( null )})
    }

    return(<>
            <div class="navMaster">
                <ul>
                    <li><a class="nav-item nav-link" href="/landingpage">Home</a></li>
                    <li><a class="nav-item nav-link" href="/vans">Search Vans</a></li>
                    <li><a class="nav-item nav-link" href="/newregistration">New Listing</a></li>
                    <li><a class="nav-item nav-link" href="/contactus">Contact Us</a></li>
                    
                        <div class = "nav_login">
                            {userLoggedIn?
                                    <><h2>Welcome {userLoggedIn.username}!</h2></>
                                    : <></>}
                            <form onSubmit = {handleLogin}>

                                <input 
                                className="navInput"
                                type="text" 
                                placeholder="Username" 
                                name="username"
                                onChange={(e) => {
                                    setUsername(e.target.value)
                                    console.log(username)
                                }}
                                />

                                <input 
                                className="navInput"
                                type="password" 
                                placeholder="Password" 
                                name="password"
                                onChange={(e)=>{
                                    setPassword(e.target.value)
                                    console.log(password)
                                }}
                                />
                               
                                {userLoggedIn?
                                <button onClick = {logout}>Logout</button>
                                : <button>Login</button>}

                            </form>
                        </div>
                    
                </ul>
            </div>

         
    
    </>
        
    )
}

export default NavigationBar