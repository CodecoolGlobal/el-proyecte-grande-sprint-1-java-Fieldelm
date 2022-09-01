import '../stylesheets/Video.css';
import '../stylesheets/Navbar.css';
import '../stylesheets/Recipe.css';
import '../stylesheets/RecipePage.css';
import Header from "./Header";
import Content from "./Content";


function App() {


    return (
        <div className={"container"}>
            <Header/>
            <Content/>
        </div>
    );
}

export default App;
