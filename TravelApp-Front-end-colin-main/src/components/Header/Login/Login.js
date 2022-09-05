import React from "react";
import { useState } from "react";
import "./login.css";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import Register from "../Register/Register";
import LoggedIn from "../LoggedIn/LoggedIn";

export default function Login() {
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

  return (
    <React.Fragment>
      <div className={isShown ? "login" : "hidden"}>
        <form className="form" id="frm1">
          <div>
            <TextField
              id="standard-basic"
              label="Username"
              variant="standard"
            />
            <br></br>
            <TextField
              id="standard-basic"
              label="Password"
              variant="standard"
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
      {loggedIn && <LoggedIn onClick={handleLogin} />}
    </React.Fragment>
  );
}
