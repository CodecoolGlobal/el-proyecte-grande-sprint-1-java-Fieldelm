const IngredientItem = ({name, value, unit}) => {
    return(
        <div className="ingredient-container-outer">
            <div className="ingredient-item-inner">
                <p>{value} {unit} {name}</p>
            </div>
            <br></br>
        </div>
    )
}

export default IngredientItem;