
import React, {useState} from "react";


function Signup ({createNewUser}) {
    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ username, setUsername ] = useState("")
    const [ password, setPassword ] = useState("")
    
  

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
                console.log("newUserLogin", newUserLogin)
               } 
            } >
            <br></br>    
            <h3 className = "add-car-form">Sign up today!</h3>
            
            <div className="formInputs">
            {/* <input
              type="text"
              name="name"
              placeholder="First and Last Name"
              className="input-text"
    
                value={ name }
                onChange={ ( synthEvent )=>{ setName( synthEvent.target.value ) } }
    
            /><br />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="input-text"
    
                value={ email }
                onChange={ ( synthEvent )=>{ setEmail( synthEvent.target.value ) } }
    
            /><br /> */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="input-text"
    
                value={ username }
                onChange={ ( synthEvent )=>{ setUsername( synthEvent.target.value ) } }
    
            /><br />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input-text"
    
                value={ password }
                onChange={ ( synthEvent )=>{ setPassword( synthEvent.target.value ) } }
        
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


export default Signup;