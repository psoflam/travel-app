import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

export default function Register(props) {
  const axios = require("axios").default;
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const addUser = (props) => {
    console.log();
    axios
      .post("/api/add", {
        username: userName,
        password: password,
        email: email,
      })
      .then(function (response) {
        console.log(response);
        alert("Thank you for registering!");
        props.onClick();
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <React.Fragment>
      <div className="register">
        <form className="form--register">
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            defaultValue={email}
            onChange={handleEmail}
          />
          <br></br>
          <TextField
            id="standard-basic"
            label="Username"
            variant="standard"
            defaultValue={userName}
            onChange={handleUserName}
          />
          <br></br>
          <TextField
            id="standard-basic"
            label="Password"
            variant="standard"
            defaultValue={password}
            onChange={handlePassword}
          />
          <br></br>
          <Button
            variant="contained"
            onClick={addUser}
            onChange={props.onClick}
          >
            Submit
          </Button>
          <Button variant="contained" onClick={props.onClick}>
            back
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
