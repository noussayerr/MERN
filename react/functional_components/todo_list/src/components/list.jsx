import React from 'react'

const List=(prop)=> {
  const {list}=prop;
  return (
    <div>
        {list.map((a,i)=>(
            <div className='list' key={i}>
                <p className={a.statu ?"complete":""}>{a.cont}</p>
                
                <input type="checkbox" id="scales" name="scales" onChange={()=>prop.change(a)}  />
                <input type="button" value="Delete" onClick={()=>prop.Delete(i)}/>
            </div>
        ))}
        
    </div>
  )
}
export default List