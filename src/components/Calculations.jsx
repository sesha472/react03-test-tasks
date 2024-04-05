import React, { useState,useEffect } from 'react'

const Calculations = () => {
  const [count, setCount] = useState(0);
  
  

  return (
    <>  
    <h1> count incresing</h1> 
    <p>{count}</p>
    <button onClick={ ()=> setCount(count+1)}>Add</button>
    <button onClick={ ()=> {count>0 ?setCount(count-1):null}}>Subtact</button>
      
    </>
  )
}

export default Calculations
