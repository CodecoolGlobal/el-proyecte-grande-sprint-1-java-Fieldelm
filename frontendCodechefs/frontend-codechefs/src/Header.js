import {Link} from "react-router-dom";

const Header = () => {


    return(
        <div className="topnav">
            <nav>
                <a className="active" href="#home">Home</a>
                <Link to="/invoices">Invoices</Link>
                <a href="#contact">Recipes</a>
                <a href="#about">About us</a>
            </nav>
        </div>
    )
}

export default Header