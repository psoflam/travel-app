import React from "react";
import "./login.css";

export default function Login() {
  return (
    <React.Fragment>
      <div id="login">
        <form className="form" id="frm1">
          <input type="text" placeholder="First Name"></input>
          <br></br>

          <input type="text" placeholder="Last Name"></input>
          <br></br>
          <input type="button" value="Submit"></input>
        </form>
      </div>
    </React.Fragment>
  );
}

// First name:{" "}
// Last name:{" "}
