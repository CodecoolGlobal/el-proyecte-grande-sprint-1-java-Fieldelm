import {Link} from "react-router-dom";

const Header = () => {


    return(
        <div className="topnav">
            <nav>
                <a className="active" href="src/component/Header#home">Home</a>
                <Link to="/invoices">Invoices</Link>
                <a href="src/component/Header#contact">Recipes</a>
                <a href="src/component/Header#about">About us</a>
            </nav>
        </div>
    )
}

export default Header