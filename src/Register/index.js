import React from "react";
import "./register.css";
import {Link} from "react-router-dom";

const Header = () => {
  
  return (
    <header>
        <Link to="/">
      <div className="logo-container">
        <img className="ganz-logo" src="/ganz-logo.png" alt="Ganzmusik Logo" />
      </div>
      </Link>
        <Link to="/Login">
      <p className="log-in">Log in</p>
       </Link> 
    </header>
  );
};

function Register () {
    return(
        <div className="container">
            <Header />
            <main className="register-main">
                <h2>Ganzmusik Application</h2>
                <form className="register-form">
                    <input type="text" placeholder="First Name" required/>
                    <input type="text" placeholder="Last Name" required/>
                    <input type="text" placeholder="Username" required/>
                    <input type="password" placeholder="Password" required/>
                    <input type="email" placeholder="Email" required/>
                    <input type="tel" placeholder="Phone Number" required/> 
                    <input type="text" placeholder="Address" required/>
                    <textarea placeholder="Tell what motivates you to take on this training" required/>
                    Select your preferred training program:
                    <select>
                        <option>Piano</option>
                        <option>Organ</option>
                        <option>Violin</option>
                        <option>Voice</option>
                        <option>Guitar</option>
                        <option>Drums</option>
                        <option>Saxophone</option>
                        <option>Trumpet</option>
                        <option>Talking Drum(Africa)</option>
                        <option>Studio Production</option>
                        <option>Dance & Choreography</option>
                    </select>
                    <button type="submit">Register</button>
                    Already have an account? <Link to="/Login">Login</Link>
                </form>
            </main>
        </div>

    );
}

export default Register;