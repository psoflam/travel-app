import React from "react";
import Login from "./Login/Login";
import "./header.css";

export default function Header() {
  return (
    <>
      <Login />
      <div >
        <h1 id="welcome--tag">Welcome To Your Next Getaway</h1>
      </div>
    </>
  );
}
