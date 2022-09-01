import RecipeCardList from "./RecipeCardList";
import {useEffect, useState} from "react"
import Video from "./Video";

const Content = () => {

    const [recipes, setRecipes] = useState()

    useEffect(() => {
        fetchData()
            .then(_res => setRecipes(_res))
    }, []);

    const fetchData = async () => {
        let data = await fetch(`get-all-recepies`)
        console.log(data)
        return await data.json()
    }

    const cardList = recipes === undefined ? "loading..." : <RecipeCardList list={recipes}></RecipeCardList>

    console.log(recipes)
    return(

        <div >
            <Video/>
            {cardList}
        </div>


    )
}

export default Content