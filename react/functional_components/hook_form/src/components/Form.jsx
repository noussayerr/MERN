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
        <form onSubmit={ createUser }>
            <div className='inputxlabel'>
                <label>First Name :</label>
                <input type='text' value={firstname} onChange={(e)=>setfirstname(e.target.value)} />
            </div>
            <div className='inputxlabel'>
                <label>Last Name: </label> 
                <input type="text"value={lastname} onChange={ (e) => setlastname(e.target.value) } />
            </div>
            <div className='inputxlabel'>
                <label>Email Address: </label> 
                <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div className='inputxlabel'>
                <label>Password: </label>
                <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <div className='inputxlabel'>
                <label>confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={ (e) => setconfirmPassword(e.target.value) } />
            </div>
            <input className='btn' type="submit" value="Create User" />
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