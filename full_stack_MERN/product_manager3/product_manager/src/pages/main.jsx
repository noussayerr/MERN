import React from 'react'
import Form from '../components/form';
import Allproduct from '../components/allproduct';
import { useState } from 'react'
function Main() {
  const [productlist, setProductlist] = useState([]);
  const removeproduct=(product_to_remove)=>{
    setProductlist(productlist.filter(product=> product._id !== product_to_remove))
  }
  return (
    <div>
        <Form productlist={productlist} setProductlist={setProductlist}/>
        <Allproduct productlist={productlist} setProductlist={setProductlist} removeproduct={removeproduct} />
    
    </div>
  )
}
export default Main;