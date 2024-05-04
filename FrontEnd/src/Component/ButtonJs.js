import { Button } from '@mui/material'
import React from 'react'

function ButtonJs({color,text,bgColor}) {
  return (
    <Button  sx={{backgroundColor:bgColor,borderRadius:'4px',color:color,marginLeft:"8px"}} >{text}</Button>
  )
}

export default ButtonJs