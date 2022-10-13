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
                <Link className="active" to="/">Home</Link>
                <Link to="/all-recipes">Recipes</Link>
                <Link to="/add-recipe">Add recipes</Link>
                <Link to="/about-us">About us</Link>
                
                {userName ===null && <Link to="/register">Register</Link>}
                {userName !=null && (<p className="user">{userName}</p>)}
                {userName !=null ? (<a onClick={handleLogout}>Logout</a>): (<Link to="/login">Login</Link>)}
            </nav>
        </div>
    )
}

export default Header