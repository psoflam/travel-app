import React from "react";
import { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Register from "../Register/Register";
import LoggedIn from "../LoggedIn/LoggedIn";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isShown, setIsShown] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);
  const [register, setRegister] = useState(false);

  const handleLogin = (event) => {
    setLoggedIn((current) => !current);
    setIsShown((current) => !current);
  };

  const handleRegister = (event) => {
    setRegister((current) => !current);
    setIsShown((current) => !current);
  };

  const handleUserName = (event) => {
    setUserName(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  // const axios = require("axios").default;

  // const loginHandler = () => {
  //   axios
  //     .get(`/api/get/${userName}`)
  //     .then(function (response) {
  //       // handle success
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       // handle error
  //       console.log(error);
  //     })
  //     .then(function () {
  //       // always executed
  //     });
  // };
  // Make a request for a user with a given ID

  return (
    <React.Fragment>
      <div className={isShown ? "login" : "hidden"}>
        <form className="form" id="frm1">
          <div>
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
            <Button variant="contained" onClick={handleLogin}>
              Login!
            </Button>
            <Button variant="contained" onClick={handleRegister}>
              Sign up
            </Button>
          </div>
        </form>
      </div>
      {register && <Register onClick={handleRegister} />}
      {loggedIn && <LoggedIn onClick={handleLogin} userName={userName} />}
    </React.Fragment>
  );
}
