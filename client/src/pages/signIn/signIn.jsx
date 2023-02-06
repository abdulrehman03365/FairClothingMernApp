import { Component } from "react";
import './signIn.css'
class SignIn extends Component{
    render()
    {
        return(
            
            <div class="logInForm">
        <form action="api/auth/signIn" method="post" class="form">
          <h1 class="title">Log In</h1>
    
          <div class="inputContainer">
            <input type="text" class="input" name="username" required placeholder="a"/>
            <label for="" class="label">Username</label>
          </div>
    
          <div class="inputContainer">
            <input type="text" class="input" name="password" required minlength="8" placeholder="a"/>
            <label for="" class="label">Password</label>
          </div>

    
          <input type="submit" class="submitBtn" value="Sign up"/>
        </form>
      </div>
            

        )
    }
}

export default SignIn;