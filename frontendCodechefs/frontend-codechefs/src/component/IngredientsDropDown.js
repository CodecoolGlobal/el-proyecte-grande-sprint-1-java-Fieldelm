import {useState} from "react";
import {useEffect} from "react";
import {getApi} from "../util/fetchAPI";
import IngredientDropItem from "./IngredientDropItem";

const IngredientsDropDown = () =>{
    console.log("start")
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        console.log("useefect")
        getApi(`/get-all-ingredients-name`)
            .then(_res => setIngredients(_res))
    }, []);

    console.log("kaki")
    console.log(ingredients)
    const ingredientsList = <IngredientDropItem list={ingredients}></IngredientDropItem>

    return(
        <>
            <label htmlFor="ingredients"></label>
            <select>
                {ingredientsList}
            </select>
        </>
    )
}

export default IngredientsDropDown;