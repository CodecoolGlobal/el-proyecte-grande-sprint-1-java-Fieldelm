import '../stylesheets/Video.css';
import '../stylesheets/Navbar.css';
import '../stylesheets/Recipe.css';
import '../stylesheets/RecipePage.css';
import '../stylesheets/Register.css';
import '../stylesheets/AddRecipe.css';
import '../stylesheets/News.css';
import '../stylesheets/Advice.css';

import Header from "./landingpage/Header";
import Content from "./landingpage/Content";


function App({isLoggedIn, setIsLoggedIn}) {



    return (
        <div className={"container"}>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
            <Content/>
        </div>
    );
}

export default App;
