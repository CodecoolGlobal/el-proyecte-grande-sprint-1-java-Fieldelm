const IngredientDropItem = ({list}) =>{

    const ingredientNameList = list === undefined ? "loading...":list.map(ingredient => <option key={ingredient} value={ingredient}>{ingredient}</option>)
    return(
            ingredientNameList
    )
}

export default IngredientDropItem;