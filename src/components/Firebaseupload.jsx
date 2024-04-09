import React, { useState } from 'react';
import axios from 'axios';

const Firebaseupload = () => {
    
    const [data, setdata] = useState({
        username:"",
        password:"",
        email:"",
        confirmpassword:"",
    });
    const {username,password,email,confirmpassword}= data;

      const inputchangeHandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})
      }
      const submitHandler=(e)=>{
        e.preventDefault();
        axios.post('https://sesha-user-data24-default-rtdb.firebaseio.com/register.json',data)
        .then(()=>alert("submited sucessfully ")) 

      }
  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          onChange={inputchangeHandler}
          placeholder="username"
          name="username"
          value={username}
        />
        <br></br>
        <input
          type="password"
          onChange={inputchangeHandler}
          placeholder="password"
          name="password"
          value={password}
        />
        <br></br>

        <input
          type="email"
          onChange={inputchangeHandler}
          placeholder="email"
          name="email"
          value={email}

        />
        <br></br>

        
        <input
          type="password"
          onChange={inputchangeHandler}
          placeholder="confirmpassword"
          name="confirmpassword"
          value={confirmpassword}
        />
        <br></br>

        <input type="submit" name='submit' />
        
      </form>
    </>
  );
}

export default Firebaseupload
