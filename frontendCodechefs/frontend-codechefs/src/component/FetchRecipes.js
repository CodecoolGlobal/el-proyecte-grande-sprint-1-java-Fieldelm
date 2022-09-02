import {useEffect, useState} from "react";
import {getApi} from "../util/fetchAPI";
import RecipeCardList from "./RecipeCardList";
import Header from "./Header";

const FetchRecipes = () =>{

    const [recipes, setRecipes] = useState()

    useEffect(() => {
        getApi(`/get-all-recipes`)
            .then(_res => setRecipes(_res))
    }, []);


    const cardList = recipes === undefined ? "loading..." : <RecipeCardList list={recipes}></RecipeCardList>
    console.log(cardList)

    return(
        <div>
            <Header/>
            {cardList}
        </div>
    )
}

export default FetchRecipes;