const IngredientItem = ({name, value, unit}) => {
    return(
        <div className="ingredient-container">
            <p>{value} {unit} {name}</p>
        </div>
    )
}

export default IngredientItem;