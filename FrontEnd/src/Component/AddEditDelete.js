import React from 'react'
import ButtonJs from "./ButtonJs"
import { Link } from 'react-router-dom'
import "../LogIn/LogIn.css"
function AddEditDelete() {
  return (
    <> <Link to={'/Read-Student'} className='LinksType'><ButtonJs text="Read" bgColor="cyan" color="black" /> </Link>
   <Link to={'/Update-Student'} className='LinksType'> <ButtonJs text="Edit" bgColor="blue" color="white"/> </Link>
   <Link className='LinksType'> <ButtonJs text="Delete" bgColor="red" color="white"/></Link> </>
  )
}

export default AddEditDelete