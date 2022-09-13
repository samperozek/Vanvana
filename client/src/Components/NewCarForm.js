import React, {useState} from "react";
import { useHistory } from "react-router-dom"

function NewCarForm ({goGetNewCar}) {

    const [ year , setYear ] = useState( "" )
    const [ make , setMake ] = useState( "" ) 
    const [ model , setModel ] = useState( "" )
    const [ price , setPrice ] = useState()
    const [ inputFieldForNewCarImageValue , updateInputFieldForNewCarImageValue ] = useState( "" )
    const [ buyer, setBuyer ] = useState("")
    const [ owner, setOwner ] = useState("")
  
    const history = useHistory()

    return (
        <div >
          <form className="add-car-form"
    
            onSubmit={ 
              
              ( synthEvent )=>{
    
                synthEvent.preventDefault()
    
                let newCar = {
    
                  year: year,
                  make: make,
                  model: model,
                  price: price,
                  imageURL: inputFieldForNewCarImageValue,
                  user_id: buyer,
                  dealer_id: owner
    
                }
                goGetNewCar(newCar)
                history.push('/vans')
               } 
            } >
              <br></br>
            <h3 className = "add-car-form">List New Van for Sale</h3>
            
            <div className="formInputs">
            <input
              type="text"
              name="year"
              placeholder="Enter the Year"
              className="input-text"
    
                value={ year }
                onChange={ ( synthEvent )=>{ setYear( synthEvent.target.value ) } }
    
            /><br />
            <input
              type="text"
              name="make"
              placeholder="Enter the Make"
              className="input-text"
    
                value={ make }
                onChange={ ( synthEvent )=>{ setMake( synthEvent.target.value ) } }
    
            /><br />
            <input
              type="text"
              name="model"
              placeholder="Enter the Model"
              className="input-text"
    
                value={ model }
                onChange={ ( synthEvent )=>{ setModel( synthEvent.target.value ) } }
    
            /><br />
            <input
              type="text"
              name="price"
              placeholder="Enter the price"
              className="input-text"
    
                value={ price }
                onChange={ ( synthEvent )=>{ setPrice( synthEvent.target.value ) } }
    
            /><br />  
            <input
              type="text"
              name="image"
              placeholder="Enter the picture URL for the Van..."
              className="input-text"
    
                value={ inputFieldForNewCarImageValue }
                onChange={ ( synthEvent )=>{ updateInputFieldForNewCarImageValue( synthEvent.target.value ) }  }
    
            /><br />
            <input
              type="text"
              name="owner_id"
              placeholder="Enter the Owner's ID"
              className="input-text"
    
                value={ owner }
                onChange={ ( synthEvent )=>{ setOwner( synthEvent.target.value ) }  }
    
            /><br />
            <input
              type="text"
              name="dealer_id"
              placeholder="Enter the Dealer's ID"
              className="input-text"
    
                value={ buyer }
                onChange={ ( synthEvent )=>{ setBuyer( synthEvent.target.value ) }  }
    
            /><br />
            </div>
            <input
                type="submit"
              name="submit"
              value="Submit Posting"
              className="submit"
            />
    
          </form>
    
    
        </div>
      );
    }


export default NewCarForm;