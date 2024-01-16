import React from 'react'

const List=(prop)=> {
  const {list}=prop;
  const {setList}=prop;
  
  return (
    <div>
        {list.map((a,i)=>(
            <div key={i}>
                <p>
                    {a}
                <input type="checkbox" id="scales" name="scales"  />
                <input type="button" value="Delete" onClick={(e)=>prop.Delete(i)}
             />
                </p>
            </div>

        ))}
    </div>
  )
}
export default List