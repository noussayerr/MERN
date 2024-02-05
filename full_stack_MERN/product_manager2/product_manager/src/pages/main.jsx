import React from 'react'
import Form from '../components/form';
import Allproduct from '../components/allproduct';
import { useState } from 'react'
function Main() {
  const [productlist, setProductlist] = useState([]);
  return (
    <div>
        <Form productlist={productlist} setProductlist={setProductlist}/>
        <Allproduct productlist={productlist} setProductlist={setProductlist} />
    </div>
  )
}
export default Main;