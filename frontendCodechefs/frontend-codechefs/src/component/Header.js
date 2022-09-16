import {Link} from "react-router-dom";

const Header = () => {


    return(
        <div className="topnav">
            <nav>
                <Link className="active" to="/">Home</Link>
                <Link to="/all-recipes">Recipes</Link>
                <Link to="/add-recipe">Add recipes</Link>
                <a href="src/component/Header#about">About us</a>
            </nav>
        </div>
    )
}

export default Header