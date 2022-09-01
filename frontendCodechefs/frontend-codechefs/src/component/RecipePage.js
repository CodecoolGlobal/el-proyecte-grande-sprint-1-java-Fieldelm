import { useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import {getApi} from "../util/fetchAPI"
import { RecipeMainPage } from "./RecipeMainPage";

const RecipePage = () => {

    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState();
    console.log(recipeId);


    useEffect(()=>{
        getApi(`/get-one-recipe/${recipeId}`)
        .then(_res => setRecipe(_res));
    }, []);



    const recipeData = recipe === undefined ? "loading..." : <RecipeMainPage recipe={recipe}></RecipeMainPage>


    return(
        <div>
            <Header/>
            {recipeData}
        </div>
    )
}

export default RecipePage