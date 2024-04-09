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
       axios.get('https://sesha-user-data24-default-rtdb.firebaseio.com/rigister.json').
       then(response=>setserverdata(response.data))
    
      
    }, [])
    
    
  return (
    <div style={{backgroundColor:'orange',alignItems:'start'}}>
        <h1 >Data getting </h1>
        {/* {serverdata.map((item,index)=><li key={index}>{item.title}</li>)} */}
      
    </div>
  )
}

export default Datagetting;
