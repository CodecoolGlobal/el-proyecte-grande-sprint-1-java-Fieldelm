import RecipeCardList from "./RecipeCardList";
import {useEffect, useState} from "react"
import Video from "./Video";
import {getApi} from "../util/fetchAPI"

const Content = () => {

    const [recipes, setRecipes] = useState()

     useEffect(() => {
       getApi(`/get-all-recipes`)
            .then(_res => setRecipes(_res))
    }, []);


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