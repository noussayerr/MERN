import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");  
    return(
        <div className='App'>
        <form >
            <div className='inputxlabel'>
                <label>First Name :</label>
                <input type='text' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
            </div>
            { 
                firstname.length<2 &&  firstname.length>0?
                <p>First Name field must be at least 2 characters</p>:
                null
            }
            <div className='inputxlabel'>
                <label>Last Name: </label> 
                <input type="text"value={lastname} onChange={ (e) => setlastname(e.target.value) } />
            </div>
            { 
                lastname.length<2 &&lastname.length>0?
                <p>Last Name field must be at least 2 characters</p>:
                <></>   
            }
            <div className='inputxlabel'>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            { 
                email.length<5 &&email.length>0?
                <p>Email field must be at least 5 characters</p>:
                <></>   
            }
            
            <div className='inputxlabel'>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            { 
                password.length<8 && password.length>0?
                <p>Password field must be at least 8 characters</p>:
                <></>   
            }
            <div className='inputxlabel'>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            { 
                confirmPassword!=password?
                <p>Password must match</p>:
                <></>   
            }
        </form>
        <div className='form_data'>
                <h3>Your Form Data</h3>
                <p><label>First Name :</label> {firstname}</p>
                <p><label>Last Name :</label>{lastname}</p>
                <p><label>Email:</label>{email}</p>
                <p><label>Password :</label>{password}</p>
                <p><label>confirm password :</label>{confirmPassword}</p>
            </div>
        </div>
    );
};
    
export default UserForm;