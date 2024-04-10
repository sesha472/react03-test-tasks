import React from 'react';
import { useEffect,useState } from 'react';
import axios  from 'axios';

const Datagetting = () => {
    // const [data, setdata] = useState([])
    // useEffect(() => {
    //  fetch('https://jsonplaceholder.typicode.com/todos')
    //  .then(response=>response.json())
    //  .then(result=>setdata(result))
    
      
    // }, [])

    const [serverdata, setserverdata] = useState([]);
    useEffect(() => {
       axios.get('https://jsonplaceholder.typicode.com/posts').
       then(response=>setserverdata(response.data))
    
      
    }, [])
    
    
  return (
    <div style={{backgroundColor:'#8889832' ,margin:"auto 4em ",listStyle:"inherit",textAlign:"left" ,borderRadius:"10px", listStyleType: "square",fontSize:"1.2em"}}>
        <h1 >Data getting </h1>
        {serverdata.map((item,index)=><li style={{margin:"1em 1em"}} key={index}>{item.title}</li>)}
      
    </div>
  )
}

export default Datagetting;
