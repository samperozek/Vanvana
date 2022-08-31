
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

  const [allCars, setCar] = useState([])
  const [currentUser, setCurrentUser] = useState(false)

  const fetchCar = () => {
    fetch("http://localhost:4003/vans")
      .then(res => res.json())
      .then(data => setCar(data))
  }
  useEffect(fetchCar, [])


  const userLogin = () => {
    fetch ( "http://localhost:4003/login",
      {
      method: "POST",
      headers: {"Content-Type" : "application/json"   },
      body: JSON.stringify() 

      })
      .then(r => r.json())
      .then (console.log("running post to LOGIN"))
  }
  
  const goGetNewCar = (carFromForm) => {
    setCar(  [ carFromForm , ...allCars ]  )
    fetch( "http://localhost:4003/vans" , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( carFromForm )
      } )
      .then( response => response.json() )
      .then( console.log )
  }

  
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userToLogin, setUserInfo] = useState({username: "", password: ""})

  const handleLoginSubmit = (synthEvent) => {
    synthEvent.preventDefault()
    console.log('sam da bst')
  }

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleUserInfoChange = (e) => {
    setUserInfo({...use})
  }

  return (
    
    <div>
      
      <button onClick={ console.log('hello') }>Log Out</button>

      <form onSubmit = {handleLoginSubmit}>
        <input onChange = {handleUsername} name = "username"/>
        <input onChange = {handlePassword} type = "password" name = "password"/>
        <input type = "submit"/>
      </form>

      {/* {loggedInUser? <> <h2>Welcome {loggedInUser.name}!</h2></>} */}

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
