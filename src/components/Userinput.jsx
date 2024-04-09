import React, { useState } from 'react'

const Userinput = () => {
    const [data, setdata] = useState(
        { username:"",
         password:"",
        email:''}
    );
   const  {username,password,email} = data;

    const changeInputhandler=(e)=>{
        setdata({...data,[e.target.name]:e.target.value})

    }
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(data);
        

    }
  return (
    <div>
        <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={changeInputhandler}
        placeholder="username"
        value={username}
        name='username'
      />
      <br/>
      <input
        type="password"
        onChange={changeInputhandler}
        placeholder="password"
        value={password}
        name='password'
      />
      <br />
      <input
        type="email"
        onChange={changeInputhandler}
        placeholder="email"
        value={email}
        name='email'
      /><br/>
      <input type='submit'/>
      </form>
    </div>
  );
}

export default Userinput;

