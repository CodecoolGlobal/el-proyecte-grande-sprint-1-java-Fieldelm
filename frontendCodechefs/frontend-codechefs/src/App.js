import './App.css';
import {useEffect, useState} from "react"


function App() {

    const [recipes, setRecipes] = useState()

    useEffect(() => {
        fetchData()
            .then(_res => console.log("fetch successful"),
                _res => console.log("fetch failed"))
    }, []);

    const fetchData = async () => {
        let data = await fetch(`/get-all-recipes`)
        return await data.json()
    }


    return (
        <div className="App">
            <header className="App-header">

            </header>
        </div>
    );
}

export default App;
