import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

   
    const navigate = useNavigate();

    const userName = localStorage.getItem("user");

    
    //const user = userName != null && <p className="user">{userName}</p>

    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        //setIsLoggedIn(false);
        navigate("/")
     
    }


    //const loginButton = userName === null ? <Link to="/login">Login</Link> : <a onClick={handleLogout}>Logout</a> 

    
    return (
        <div className="topnav">
            <nav>
                <Link id="go-home" className="active" to="/">Home</Link>
                <Link id="go-all-recipes" to="/all-recipes">Recipes</Link>
                <Link id="go-add-recipes" to="/add-recipe">Add recipes</Link>
                <Link id="go-about-us" to="/about-us">About us</Link>
                
                {userName ===null && <Link id="go-register" to="/register">Register</Link>}
                {userName !=null && (<p  className="user">{userName}</p>)}
                {userName !=null ? (<a id="logout" onClick={handleLogout}>Logout</a>): (<Link id="go-login" to="/login">Login</Link>)}
            </nav>
        </div>
    )
}

export default Header