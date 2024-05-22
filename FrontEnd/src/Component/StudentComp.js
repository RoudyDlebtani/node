import React, { useState } from "react";
import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import axios from "axios";
import "./StudentComp.css";
import { useNavigate } from "react-router-dom";

function StudentComp({ Title, LabelName, LabelEmail, ExitButton, variant, disabled }) {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: '',
    email: ''
  });

  const createStudent = () => {
    axios.post("http://localhost:3001/add-Student", {
      name: values.name,
      email: values.email
    })
    .then(res =>  navigate("/"))
    .catch(err => console.error(err));
  };




  return (
    <Container className="LogInContainer">
      <Box className="LogInBox">
        <Typography variant="h3" sx={{ width: "100%" }} mb={1}>
          {Title}
        </Typography>
        <Typography sx={{ width: "100%" }}>Name</Typography>
        {/* <form onSubmit={createStudent} > */}
          <TextField
            id="outlined-basic"
            label={LabelName}
            variant={variant}
            disabled={disabled}
            className="StudentCompTextField"
            onChange={(e) => setValues({ ...values, name: e.target.value })}
          />
          <Typography sx={{ width: "100%" }}>Email</Typography>
          <TextField
            id="outlined-basic"
            label={LabelEmail}
            variant={variant}
            disabled={disabled}
            className="StudentCompTextField"
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <br />
          <Button className="StudentCompButton" type="submit" onClick={createStudent}>
            {ExitButton}
          </Button>
        {/* </form> */}
      </Box>
    </Container>
  );
}

export default StudentComp;


