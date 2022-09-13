
import React, { useEffect , useState } from "react";

import CarCardAccount from "./CarCardAccount";



function MyAccount ({loggedInUser}) {

    const [vansIn, setVans] = useState([]) 
    const [lengthCounter, setLength] = useState()
    
    let vanCounter = () => {
        setLength(vansIn.length)
        console.log("LengthCounter:",lengthCounter)
    }

    const fetchVans = () => {
        if (loggedInUser) {
        fetch(`/users/${loggedInUser.id}`)
          .then(res => res.json())
          .then(data => setVans(data.vans))
          .then(vanCounter())
          }
      }
      
    useEffect(fetchVans, [loggedInUser , lengthCounter])

    return (
        <ul className="cards">
            {
              vansIn.map((eachVan)=>{
                return(
                <CarCardAccount
                    key = {eachVan.id}
                    carToRender = {eachVan}
                    vanCounter = {vanCounter}/>)
              })
            }
        </ul>
      
          
        );     
}

export default MyAccount;