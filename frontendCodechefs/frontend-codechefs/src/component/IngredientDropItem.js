const IngredientDropItem = ({list}) =>{

    const ingredientNameList = list === undefined ? "loading...":list.map(ingredient => <option value={ingredient.name}></option>)
    return(
        <div>
            {ingredientNameList}
        </div>
    )
}

export default IngredientDropItem;