import RecipeCardList from "./RecipeCardList";
import {useEffect, useState} from "react"

const Content = () => {

    const [recipes, setRecipes] = useState()

    useEffect(() => {
        fetchData()
            .then(_res => setRecipes(_res))
    }, []);

    const fetchData = async () => {
        let data = await fetch(`get-all-recepies`)
        return await data.json()
    }

    const cardList = recipes === undefined ? "loading..." : <RecipeCardList list={recipes}></RecipeCardList>

    console.log()
    return(

        <div >
            {cardList}
        </div>


    )
}

export default Content