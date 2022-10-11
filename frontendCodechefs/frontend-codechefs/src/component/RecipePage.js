import { useEffect } from "react";
import {Navigate, useParams} from "react-router-dom";
import Header from "./Header";
import { useState } from "react";
import {getApi} from "../util/Fetch"
import { RecipeMainPage } from "./RecipeMainPage";


const RecipePage = () => {

    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState();
    //console.log(recipeId);

const getRecipe = async () =>{
    let recipeData = await getApi(`/get-one-recipe/${recipeId}`);
    //console.log(recipeData);
    setRecipe(recipeData);
    //console.log(recipe);

}

    useEffect(()=>{
      getRecipe();
    }, [recipeId]);

    

    const recipeData = recipe === undefined ? "loading..." : <RecipeMainPage recipe={recipe}/>


    return(
        <div>
            <Header/>
            {recipeData}
            
        </div>
    )
}

export default RecipePage