import React from 'react'

function Content(prop) {
    const {tabs}=prop;
    const {index}=prop;
  return (
    <div className='content'>
        {tabs[index].content}
    </div>
  )
}
export default Content