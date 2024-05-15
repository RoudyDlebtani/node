import React from 'react'
import '../LogIn/LogIn.css'
import { Box, Button, Container, TextField, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import "./StudentComp.css"
function StudentComp({Title,LabelName,LabelEmail,ExitButton,variant,disabled}) {
  return (
    <Container className='LogInContainer'>

    <Box className="LogInBox">
    <Typography variant='h3' sx={{width:"100%"}} mb={1}>{Title} </Typography>
    <Typography  sx={{width:"100%"}}>Name </Typography>
    <TextField id="outlined-basic" label={LabelName} variant={variant} disabled={disabled} className='StudentCompTextField'/>
    <Typography  sx={{width:"100%"}}>Email </Typography>
    <TextField id="outlined-basic" label={LabelEmail} variant={variant} disabled={disabled} className='StudentCompTextField'/><br/>
    <Link className="LinksType" to="/"><Button className='StudentCompButton'  >{ExitButton}</Button></Link>
    </Box>


 </Container>
  )
}

export default StudentComp