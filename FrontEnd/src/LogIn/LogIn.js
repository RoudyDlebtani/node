import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import "./LogIn.css"
import axios from 'axios'
import AddEditDelete from '../Component/AddEditDelete'
function LogIn() {
  useEffect(() => {

    axios.get('http://localhost:8081/')
    .then(response => console.log(response))
    .catch(error => console.log(error))
  },[])
  return (
    <Container className='LogInContainer'>

        <Box className="LogInBox">
            <Typography variant='h3' sx={{width:"100%"}}>Student List</Typography>
   <Button className='LogInCreat'>Create +</Button>
   <Grid container>

   <Grid xs={2} className="gridAlignCenter"> <Box><Typography>ID</Typography> </Box>  </Grid>
   <Grid xs={2} className="gridAlignCenter"> <Box><Typography>Name</Typography> </Box></Grid>
   <Grid xs={3} className="gridAlignCenter"> <Box><Typography>Email</Typography> </Box></Grid>
   <Grid xs={5} className="gridAlignCenter">
   <Box>
    Action
    <AddEditDelete/>
    </Box>
    </Grid> 

   </Grid>
        </Box>


     </Container>
  )
}

export default LogIn