
import React, {useState} from "react";
import { useHistory } from "react-router-dom"

function Signup ({createNewUser}) {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    
    const history = useHistory()

    return (
        <div >
          <form 
    
            onSubmit={ 
              
              ( synthEvent )=>{
    
                synthEvent.preventDefault()
    
                let newUserLogin = {
    
                //   name: name,
                //   email: email,
                  username: username,
                  password: password
    
                }
                createNewUser(newUserLogin)
                history.push("/vans")
               } 
            } >
            <br></br>    
            <h3 className = "add-car-form">Sign up today!</h3>
            
            <div className="formInputs">
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="inputfield"
             
    
                value={ username }
                onChange={ ( synthEvent )=>{ setUsername( synthEvent.target.value ) } }
    
            /><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="inputfieldpassword"
            
    
                value={ password }
                onChange={ ( synthEvent )=>{ setPassword( synthEvent.target.value ) } }
            /><br />
            </div>
            <input
                type="submit"
              name="submit"
              value="Submit Posting"
              className="sign_up_button"
            />
    
          </form>
    
    
        </div>
      );
    }


export default Signup;