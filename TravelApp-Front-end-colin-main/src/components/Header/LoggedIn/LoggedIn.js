import React from "react";
import { Button } from "@mui/material";

export default function LoggedIn(props) {
  return (
    <React.Fragment>
      <div className="logged--in">
        <form className="form" id="frm1">
          <Button variant="contained" onClick={props.onClick}>
            Logout
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
