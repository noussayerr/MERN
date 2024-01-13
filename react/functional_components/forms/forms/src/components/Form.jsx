import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  
    const createUser = (e) => {

        e.preventDefault();
        const newUser = { firstname,lastname, email, password ,confirmPassword};
        console.log("Welcome", newUser);
    	setfirstname("");
        setlastname("")
    	setEmail("");
    	setPassword("");
        setconfirmPassword("");
    };
    
    return(
        <div className='App'>
        <form >
            <div className='inputxlabel'>
                <label>First Name :</label>
                <input type='text' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
            </div>
            { 
                firstname.length<2 ?
                <p>First Name field must be at least 2 characters</p>:
                <></>   
            }
            <div className='inputxlabel'>
                <label>Last Name: </label> 
                <input type="text"value={lastname} onChange={ (e) => setlastname(e.target.value) } />
            </div>
            { 
                lastname.length<2 ?
                <p>Last Name field must be at least 2 characters</p>:
                <></>   
            }
            <div className='inputxlabel'>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            { 
                email.length<5 ?
                <p>Email field must be at least 5 characters</p>:
                <></>   
            }
            
            <div className='inputxlabel'>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            { 
                password.length<8 ?
                <p className=''>Password field must be at least 8 characters</p>:
                <></>   
            }
            <div className='inputxlabel'>
                <label>confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            { 
                confirmPassword!=password ?
                <p className=''>Password must match</p>:
                <></>   
            }
        </form>
        </div>
    );
};
    
export default UserForm;