import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <NavLink to="/" > Calculations</NavLink>
        <NavLink to="datagetting" > datagetting</NavLink>
        <NavLink to="mathcalculations" > mathcalculations</NavLink>
        <NavLink to="firebaseupload" > firebaseupload</NavLink>
        <NavLink to="user" > userdata</NavLink>
    </div>
  )
}

export default Navbar