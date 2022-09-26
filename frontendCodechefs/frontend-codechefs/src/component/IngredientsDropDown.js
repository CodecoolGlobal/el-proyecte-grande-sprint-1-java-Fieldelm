import {useState} from "react";
import {useEffect} from "react";
import {getApi} from "../util/Fetch";
import IngredientDropItem from "./IngredientDropItem";

const IngredientsDropDown = () =>{

    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getApi(`/get-all-ingredients-name`)
            .then(_res => setIngredients(_res))
    }, []);

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