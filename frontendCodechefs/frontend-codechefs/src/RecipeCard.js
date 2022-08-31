const RecipeCard = ({name, description}) => {

    return(
        <div className={"recipeCard"}>
            <div className={"recipeContainer"}>
                <p><span>Name:</span>{name}</p>
                <p><span>Description:</span>{description}</p>
            </div>

        </div>
    )

}

export default RecipeCard;