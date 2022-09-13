
import React, { useEffect , useState } from "react";

import CarCard from "./CarCard";



function MyAccount ({loggedInUser}) {

    const [vansIn, setVans] = useState([]) 
    console.log("Van State",vansIn)

    const fetchVans = () => {
        console.log("loggedInUser from MyAccount Component:", loggedInUser)
        if (loggedInUser) {
        fetch(`/users/${loggedInUser.id}`)
          .then(res => res.json())
          .then(data => setVans(data.vans))}
      }
    useEffect(fetchVans, [loggedInUser])

    return (
        <ul className="cards">
            {
            //   console.log('vans from myaccount!:', vansIn)
              vansIn.map((eachVan)=>{
                return(
                <CarCard
                    key = {eachVan.id}
                    carToRender = {eachVan}/>)
              })
            //   vansIn.map((eachCar) => {
                
            //       <CarCard
            //         key ={eachCar.id}
            //         carToRender={eachCar}
            //       /> }
            //   )
            }
        </ul>
      
          
        );     
}

export default MyAccount;