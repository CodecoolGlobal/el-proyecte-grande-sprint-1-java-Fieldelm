import { Link } from "react-router-dom";

const Header = () => {

    const userName = localStorage.getItem("user");

    const user = userName != null ? <p className="user">{userName}</p> : <></>

    const handleLogout = () => {
        
        localStorage.removeItem("token");
        localStorage.removeItem("user");
    }


    const loginButton = userName === null ? <Link to="/login">Login</Link> : <p className ="logout" onClick={handleLogout}>Logout</p> 

    
    return (
        <div className="topnav">
            <nav>
                <Link className="active" to="/">Home</Link>
                <Link to="/all-recipes">Recipes</Link>
                <Link to="/add-recipe">Add recipes</Link>
                <Link to="/register">Register</Link>
               {loginButton}
                  
              {/* <a onClick={handleLogout()} href="/">Logout</a> */}
                <a href="src/component/Header#about">About us</a>
                {user}
            </nav>
        </div>
    )
}

export default Header