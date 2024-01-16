import React,{useState} from 'react'
const Form=(prop) => {
  const [val,setVal]=useState();
  
  const newa =(e)=>{
    e.preventDefault();
    prop.add(val)
  }
  return (
    <div>
        <form onSubmit={newa}>
            <input type="text" onChange={(e)=>setVal(e.target.value)} />
            <input type='submit' value="Add" />
        </form>
    </div>
  )
}
export default Form;