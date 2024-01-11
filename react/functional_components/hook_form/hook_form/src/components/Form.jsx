import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
    
        // create a javascript object to hold all of the values
        const newUser = { 
            username: username, 
            email: email, 
            password: password 
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <div>
        <form onSubmit={ createUser }>
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value) } />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } />
            </div>
            <input type="submit" value="Create User" />
            <h3>Your form data</h3>
            <p>First Name : {username}</p>
            <p>Last Name :</p>
            <p>email: </p>
        </form>
        </div>
    );
};
    
export default UserForm;