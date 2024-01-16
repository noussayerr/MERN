import React ,{useState} from 'react'

const Newbox = (prop) => {
  
  const [color,setColor]=useState("");

  const box =(e)=>{
    e.preventDefault();
    prop.newbox(color);
  }

  return (
    <div>
      
      <form onSubmit={box}>
            <div className='inputxlabel'>
                <label>Color :</label>
                <input type="text" onChange={(e)=>setColor(e.target.value)} />
                <input className='btn' type="submit" value="Add" />
            </div>
      </form>
    </div>
  )
}
export default Newbox;