import React,{useState} from "react";

const PersonCard= (props) =>{
    const { firstname, lastname, age, hairColor } = props;
    const [birthday,setbirthday]=useState(age);
    return(
        <div>
            <h1>{firstname},{lastname}</h1>
            <p>Age : {birthday}</p>
            <p>Hair Color : {hairColor}</p>
            <button className='btn' onClick={()=>setbirthday(age => age + 1)}>Birthday Button for {firstname} {lastname}</button>
        </div>
    )
};

export default PersonCard;
