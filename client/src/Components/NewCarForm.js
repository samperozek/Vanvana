import React, {useState} from "react";


function NewCarForm ({goGetNewCar}) {

    const [ year , setYear ] = useState( "" )
    const [ make , setMake ] = useState( "" ) 
    const [ model , setModel ] = useState( "" )
    const [ price , setPrice ] = useState()
    const [ inputFieldForNewCarImageValue , updateInputFieldForNewCarImageValue ] = useState( "" )
    const [ buyer, setBuyer ] = useState("")
    const [ owner, setOwner ] = useState("")
  

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
                  buyer_id: buyer,
                  owner_id: owner
    
                }
                goGetNewCar(newCar)
               } 
            } >
    
            <h3 className = "add-car-form">New Van Listing</h3>
            
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
              placeholder="Enter the owner_id"
              className="input-text"
    
                value={ owner }
                onChange={ ( synthEvent )=>{ setOwner( synthEvent.target.value ) }  }
    
            /><br />
            <input
              type="text"
              name="buyer_id"
              placeholder="Enter the buyer_id"
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