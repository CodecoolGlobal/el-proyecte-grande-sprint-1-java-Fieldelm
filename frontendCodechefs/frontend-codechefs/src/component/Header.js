import { Link } from "react-router-dom";
import { useState } from "react";


const Header = ({isLoggedIn, setIsLoggedIn}) => {

   

    const userName = localStorage.getItem("user");

    
    //const user = userName != null && <p className="user">{userName}</p>

    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
    }


    //const loginButton = userName === null ? <Link to="/login">Login</Link> : <a onClick={handleLogout}>Logout</a> 

    
    return (
        <div className="topnav">
            <nav>
                <Link className="active" to="/">Home</Link>
                <Link to="/all-recipes">Recipes</Link>
                <Link to="/add-recipe">Add recipes</Link>
                <Link to="/about-us">About us</Link>
                {!isLoggedIn && <Link to="/register">Register</Link>}
                {isLoggedIn && (<p className="user">{userName}</p>)}
                {isLoggedIn ? (<a onClick={handleLogout}>Logout</a>): (<Link to="/login">Login</Link>)}
            </nav>
        </div>
    )
}

export default Header