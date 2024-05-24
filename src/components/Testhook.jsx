//  import React,{useRef,useState,useEffect} from 'react'

// export const Testhook = () => {

//     const [count, setcount] = useState(0)
//    let refvalue = useRef(0);    
//    useEffect(() => {
//      refvalue.current++;
//    })
   

//   return (
//     <>
//     <h1>the counter value is :{count} </h1>
//     <h1> value is changed {refvalue.current} times  </h1>
//     <button onClick={()=>setcount(count+1)}> incriment</button>
//     <button onClick={()=>setcount(count-1)}> dicrement</button>
//     </>
//   )
// }
// export default Testhook;

// import React,{useRef} from 'react';

// const Testhook = () => {

//   const inputref = useRef(0);
//     const ChangeHandler=()=>{
//         console.log(inputref);
//         inputref.current.style.background="blue";
//     }
//   return (
//     <>
//       <input type='text' ref={inputref} />
//       <button onClick={ChangeHandler}>click</button>
//     </>
//   )
// }

// export default Testhook

// usememohook 

// import React,{useState,useMemo, useCallback} from 'react'

// const Testhook = () => {
// const [number, setnumber] = useState(0);
// const [count, setcount] = useState(0)
//     const cubefun=(num)=>{
//         console.log("calculation done!");
//       return Math.pow(num,3)
//     }
//     let finalvalue= useMemo(() => cubefun(number), [number]) 
//     // let finalvalue=cubefun(number); //it casuse performence slow beacus its calls the function whenever rerenders

   
//     const fun1= useCallback(()=>"hellow")
//     const fun2=()=>"hellow"
//   return (
//     <>
//     <input type='number'value={number} onChange={(e)=>setnumber(e.target.value)}/>
//     <h1>the cube of number is :{finalvalue}</h1>
//       <hr>
//       </hr>
//       <h1>counter value :{count} </h1>
//       <button onClick={()=>setcount(count+1)}>incriment</button>
//     </>
//   )
// }

// export default Testhook

import React,{useCallback, useState} from 'react'
import Header from './Header'

const Testhook = () => {
  const [counter , setcounter ] = useState(0);

  const fun1= useCallback(()=>{},[]);
  return (
    <> 
    <Header fun1={fun1}/>
    <h1>{counter }</h1>
      <button onClick={()=>setcounter(counter+1)}>counter </button>
    </>
  )
}

export default Testhook

