const IngredientItem = ({index, name, value, unit}) => {
    return(
        <div className="ingredient-container">
            <p>{index+1}. {value} {unit} {name}</p>
        </div>
    )
}

export default IngredientItem;