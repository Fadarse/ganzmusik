import React from "react";
import "./login.css";
import {Link} from "react-router-dom";

const Header = () => {
  
    return (
      <header>
        <Link to="/">
        <div className="logo-container">
          <img className="ganz-logo" src="/ganz-logo.png" alt="Ganzmusik Logo" />
        </div>
        </Link>
          <Link to="/Register">
          <button className="apply">Apply</button>
         </Link>
        
      </header>
    );
  };

function Login () {
    return (
        <div>
            <Header />
            <main className="login-main">
                <div className="login">
                    <div style={{
                        width:"5rem",
                        height:"5rem",
                        margin:"10px",
                        border:"solid 5px #003556",
                        justifySelf:"center",
                        }}>
                        <img className="ganz-logo" src="/ganz-logo.png" alt="Ganzmusik Logo" />
                    </div>
                    <h2>WELCOME BACK</h2>
                    <form className="login-form">
                        <input type="text" placeholder="Username" required/>
                        <input type="password" placeholder="Password" required/>
                        <Link><a>Forgot Password</a></Link>
                        <button type="submit">Login</button>
                        Dont have an account? <Link to="/Register">Register</Link>
                    </form>
                </div>
            </main>
        </div>
    );
}

export default Login;