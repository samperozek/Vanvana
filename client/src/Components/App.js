
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

  console.log(allCars)

  useEffect(fetchCar, [])

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
  const updateUser = (user) => setCurrentUser(user)
  
  return (
    
    <div>

      <button onClick={ console.log('hello') }>Log In</button>
      <button onClick={ console.log('hello') }>Log Out</button>

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
