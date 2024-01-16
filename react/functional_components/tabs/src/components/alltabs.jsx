import React,{useState} from 'react'

function Alltabs(prop) {
  const {tabs}=prop;
  
  return (
    <div className='tabs'>
      {tabs.map((tab,i)=>(
        <div className='tab' key={i} onClick={(e)=>prop.change(i)}>
          {tab.label}
        </div>
      ))}
    </div>
  )
}
export default Alltabs;