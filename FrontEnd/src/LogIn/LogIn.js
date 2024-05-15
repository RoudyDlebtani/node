import { Box, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import "./LogIn.css";
import axios from 'axios';
import AddEditDelete from '../Component/AddEditDelete';
import { Link } from 'react-router-dom';

function LogIn() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <Container className='LogInContainer'>
            <Box className="LogInBox">
                <Typography variant='h3' sx={{ width: "100%" }}>Student List</Typography>
                <Link className="LinksType" to="/add-Student">
                    <Button className='LogInCreat'>Create +</Button>
                </Link>
                <Grid container>
                    <Grid item xs={2} className="gridAlignCenter">
                        <Box><Typography fontWeight="bold">ID</Typography></Box>
                    </Grid>
                    <Grid item xs={2} className="gridAlignCenter">
                        <Box><Typography fontWeight="bold">Name</Typography></Box>
                    </Grid>
                    <Grid item xs={3} className="gridAlignCenter">
                        <Box><Typography fontWeight="bold">Email</Typography></Box>
                    </Grid>
                    <Grid item xs={5} className="gridAlignCenter">
                        <Box><Typography fontWeight="bold">Action</Typography><AddEditDelete /></Box>
                    </Grid>
                </Grid>
                {students.map((student, index) => (
                    <Grid container key={index}>
                        <Grid item xs={2} className="gridAlignCenter">
                            <Box>{student.id}</Box>
                        </Grid>
                        <Grid item xs={2} className="gridAlignCenter">
                            <Box>{student.EmpName}</Box>
                        </Grid>
                        <Grid item xs={3} className="gridAlignCenter">
                            <Box>{student.EmpEmail}</Box>
                        </Grid>
                        <Grid item xs={5} className="gridAlignCenter">
                            <Box><AddEditDelete /></Box>
                        </Grid>
                    </Grid>
                ))}
            </Box>
        </Container>
    );
}

export default LogIn;
