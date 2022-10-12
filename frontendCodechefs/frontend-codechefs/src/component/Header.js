import { Link } from "react-router-dom";
import { useState } from "react";


const Header = () => {

   

    const userName = localStorage.getItem("user");

    
    const user = userName != null ? <p className="user">{userName}</p> : <></>

    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }


    const loginButton = userName === null ? <Link to="/login">Login</Link> : <a onClick={handleLogout}>Logout</a> 

    
    return (
        <div className="topnav">
            <nav>
                <Link className="active" to="/">Home</Link>
                <Link to="/all-recipes">Recipes</Link>
                <Link to="/add-recipe">Add recipes</Link>
                <Link to="/register">Register</Link>
           
                  
              {/* <a onClick={handleLogout()} href="/">Logout</a> */}
                <Link to="/about-us">About us</Link>
                {user}
                {loginButton}
            </nav>
        </div>
    )
}

export default Header