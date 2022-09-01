import {useParams} from "react-router-dom";
import Header from "./Header";
import {useState} from "react";
import {useEffect} from "react";

const RecipePage = () => {

    const [recipe, setRecipe] = useState()

    const {recipeId} = useParams()

    useEffect(() => {
        fetchData()
            .then(_res => setRecipe(_res))
    }, []);


    const fetchData = async () => {
        let data = await fetch(`/get-one-recipe/${recipeId}`)
        console.log(data)
        return await data.json()
    }

    console.log(recipe)

    return(
        <div>
            <Header/>
            {recipeId}
        </div>
    )
}

export default RecipePage