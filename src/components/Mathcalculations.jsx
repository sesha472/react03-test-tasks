import React from 'react'
import { useState } from 'react';

const Mathcalculations = () => {
  const [data, setdata] = useState("");
  const [result, setresult] = useState(0);

    const inputHandler=(e)=>{
      setdata(e.target.value)
    }

    const submithandler=(e)=>{
     e.preventDefault();
      setresult(eval(data));
    }
    
  return (
    <>
    <form onSubmit={submithandler} style={{backgroundColor :"lightgreen"}}>
    <input
        type="text"
        placeholder="userinput"
        name="data"
        value={data}
        onChange={inputHandler}
      />
      <br />
       <input type='submit' name='submit'  />
      {/* <button onClick={()=>{setresult(eval(data))}}>sumbit</button> */}
    </form>
    <button onClick={()=>{setdata(""),setresult("")}}>clear</button>

    <br />

      
    <p>THE ANSWER IS : {result}</p>


      <br />

      <button onClick={() => setdata(data + "1")}>1</button>
      <button onClick={() => setdata(data + "2")}>2</button>
      <button onClick={() => setdata(data + "3")}>3</button>
      <button onClick={() => setdata(data + "4")}>4</button>
      <button onClick={() => setdata(data + "+")}>+</button>
      <button onClick={() => setdata(data + "-")}>-</button>
      <button onClick={() => setdata(data + "*")}>*</button>
    </>
  );
}

export default Mathcalculations;
