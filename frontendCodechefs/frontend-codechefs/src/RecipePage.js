import { useEffect } from "react";
import {useParams} from "react-router-dom";
import Header from "./Header";
import { useState } from "react";

const RecipePage = () => {

    const {recipeId} = useParams()
    const [recipe, setRecipe] = useState();
    console.log(recipeId);

    useEffect(()=>{
        
    })

    return(
        <div>
            <Header/>

        </div>
    )
}

export default RecipePage