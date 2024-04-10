import React from 'react';
import {useNavigate} from "react-router-dom"
export default function Errormsg() {
const navigation =useNavigate();

  return (
    <div>
      <h1> Item not found</h1>
      <button onClick={()=>navigation("/")}>Goto Home</button>
    </div>
  );
}
