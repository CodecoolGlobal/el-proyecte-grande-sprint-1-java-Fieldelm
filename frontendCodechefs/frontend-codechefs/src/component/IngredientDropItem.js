const IngredientDropItem = ({list}) =>{

    console.log(`list: ${list}`)
    const ingredientNameList = list === undefined ? "loading...":list.map(ingredient => <option key={ingredient.id} value={ingredient.name}>{ingredient.name}</option>)
    return(
            ingredientNameList
    )
}

export default IngredientDropItem;