import {useState} from "react";
import {useEffect} from "@types/react";
import {getApi} from "../util/fetchAPI";
import IngredientDropItem from "./IngredientDropItem";

const IngredientsDropDown = () =>{

    const [ingredients, setIngredients] = useState(["kacsa", "kutya"]);

    /*useEffect(() => {
        getApi(`/get-all-ingredients-name`)
            .then(_res => setIngredients(_res))
    }, []);*/


    const ingredientsList = <IngredientDropItem list={ingredients}></IngredientDropItem>

    return(
        <>
            <label htmlFor="ingredients"></label>
            <input list="ingredients"></input>
            <datalist>
                {ingredientsList}
            </datalist>
        </>
    )
}

export default IngredientsDropDown;