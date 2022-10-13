const IngredientItem = ({rowNumber, name, value, unit}) => {
    return(
        <div className="ingredient-container">
            <p>{rowNumber}. {value} {unit} {name}</p>
        </div>
    )
}

export default IngredientItem;