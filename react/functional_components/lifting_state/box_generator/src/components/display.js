import React from 'react'

const Display = (prop)=> {
    
    return (
    <div>
        <div className='boxes'>
            {prop.color.map((color,i)=><div className='box' key={i} style={{backgroundColor:color}}></div>)}
        </div>
    </div>
  )
}
export default Display;