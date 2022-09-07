
import './App.css';
import { useEffect, useState } from 'react';
import {Route} from 'react-router-dom';

import CarList from "./CarList";
import NewCarForm from "./NewCarForm";
import ContactUs from './ContactUs';
import Home from './Home';
import LandingPage from './LandingPage';
import Login from './Login';

function App() {

  const [userToLogin, setUserInfo] = useState({username: "", password: ""})
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [allCars, setCar] = useState([])

  useEffect(()=>{
    fetch("/userInSession")
    .then(r => r.json())
    .then(userAlreadyLoggedIn => {setLoggedInUser(userAlreadyLoggedIn)})
  }, [])

  const fetchCar = () => {
    fetch("/vans")
      .then(res => res.json())
      .then(data => setCar(data))
  } 
  useEffect(fetchCar, [])

  const goGetNewCar = (carFromForm) => {
    setCar(  [ carFromForm , ...allCars ]  )
    fetch( "/vans" , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( carFromForm )
      } )
      .then( response => response.json() )

  }
  
  const handleLoginSubmit = (synthEvent) => {
    synthEvent.preventDefault()
    fetch ( "/login",
      {
      method: "POST",
      headers: {"Content-Type" : "application/json"   },
      body: JSON.stringify(userToLogin) 

      })
      .then(r => r.json())
      .then(user => { setLoggedInUser(user) })
    
  }

  const handleLogout =()=>{

    fetch(  "/logout" , { method: "DELETE" }  )
    .then( r => r.json() )
    .then( deleteResponse =>{setLoggedInUser( null )})
  }

  const handleUserLogin =( e )=>{
    setUserInfo(  { ...userToLogin , [e.target.name]: e.target.value }  )
  }



  
  return (
    
    <div>
      
      { loggedInUser? 
      (<><h2>Welcome {loggedInUser.username}!</h2> 
      <button onClick = {handleLogout}>Log Out</button> </>)
      : <h2>Please Login</h2>} 
      

      <form onSubmit = {handleLoginSubmit}>
        <input onChange = {handleUserLogin} name = "username"/>
        <input onChange = {handleUserLogin} type = "password" name = "password"/>
        <input type = "submit"/>
      </form>

      <br></br>
      <br></br>
     
     <Route path = '/'>
        <Home/>
      </Route>

      <Route path = "/landingpage">
        <LandingPage/>
      </Route>

      <Route path='/vans'>
        <CarList carListToRender = {allCars}/>
      </Route>

      <Route path='/newregistration'>
        <NewCarForm goGetNewCar={goGetNewCar}/>
      </Route>

      <Route path='/contactus'>
        <ContactUs/>
      </Route>

      <Route path='/login'>
        <Login/>
      </Route>
     
    </div>

  );
}

export default App;
