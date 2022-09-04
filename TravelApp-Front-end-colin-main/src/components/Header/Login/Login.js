import React from "react";
import "./login.css";

export default function Login() {
  return <div id="login">
    
      <form class="form" id="frm1" action="/action_page.php">
      First name: <input type="text" name="fname" placeholder="First Name"></input><br></br>
      Last name: <input type="text" name="lname" placeholder="Last Name"></input><br></br>
      <input type="button" onClick="myFunction()" value="Submit">Log In</input>
      </form>

{/* <script>
function myFunction() 
{
  document.getElementById("frm1").submit()
}
</script> */}


    Login
    
    
    
    
    
    
    
    
    </div>;
}
