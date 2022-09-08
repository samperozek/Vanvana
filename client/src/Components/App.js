
import './App.css';
import { useEffect, useState, useSyncExternalStore } from 'react';
import {Route} from 'react-router-dom';

import CarList from "./CarList";
import NewCarForm from "./NewCarForm";
import ContactUs from './ContactUs';
import Home from './Home';
import LandingPage from './LandingPage';
import Login from './Login';
import NavBar from './NavBar'
import Footer from './Footer';
import Signup from './Signup';
import Header from './Header';

function App() {

  const [userToLogin, setUserInfo] = useState({username: "", password: ""})
  const [loggedInUser, setLoggedInUser] = useState(null)
  const [allCars, setCar] = useState([])
  const [user, setUsers] = useState([])

  useEffect(()=>{
    fetch("/userInSession")
    .then(r => r.json())
    .then(userAlreadyLoggedIn => {setLoggedInUser(userAlreadyLoggedIn)})
    .then(console.log(loggedInUser))
  }, [])

  const fetchCar = () => {
    fetch("/vans")
      .then(res => res.json())
      .then(data => setCar(data))
  } 
  useEffect(fetchCar, [])

  const fetchUsers = () => {
    fetch("/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  } 
  useEffect(fetchUsers, [])

  const goGetNewCar = (carFromForm) => {
    setCar(  [ carFromForm , ...allCars ]  )
    fetch( "/vans" , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( carFromForm )
      } )
      .then( response => response.json() )

  }

  const handleLoginSubmit = (userFromForm) => {
   
    setUserInfo(userFromForm)
    fetch ( "/login",
      {
      method: "POST",
      headers: {"Content-Type" : "application/json"   },
      body: JSON.stringify(userToLogin) 

      })
      .then(r => r.json())
      .then(user => { 
        console.log(user)
        setLoggedInUser(user) })
      .then(console.log("made it through the login fetch"))
    
  }


  const handleLogout =()=>{
    console.log("we made it to logout")
    fetch(  "/logout" , { method: "DELETE" }  )
    .then( r => r.json() )
    .then( deleteResponse =>{setLoggedInUser( null )})
    .then(console.log(loggedInUser))
  }

  const handleUserLogin =( e )=>{
    setUserInfo(  { ...userToLogin , [e.target.name]: e.target.value }  )
  }

  const createNewUser = (userFromForm) => {
    setUsers(  [...user , userFromForm ]  )
    fetch( "/users" , {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify( userFromForm )
      } )
      .then( response => response.json() )
  }


  
  return (
    
    <div>
      <Header/>
      <NavBar loggedInUser = {loggedInUser} handleLoginSubmit = {handleLoginSubmit} handleLogout = {handleLogout}/>
      {/* { loggedInUser? 
      (<><h2>Welcome {loggedInUser.username}!</h2> 
      <button onClick = {handleLogout}>Log Out</button> </>)
      : <h2>Please Login</h2>} 
      

      <form onSubmit = {handleLoginSubmit}>
        <input onChange = {handleUserLogin} name = "username"/>
        <input onChange = {handleUserLogin} type = "password" name = "password"/>
        <input type = "submit"/>
      </form>

      <br></br>
      <br></br> */}
     
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

      <Route path="/signup">
        <Signup createNewUser={createNewUser}/>
      </Route>
     
    <Footer/>
     
    </div>

  );
}

export default App;
