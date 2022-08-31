const RecipeCard = ({name, imageURL:image}) => {

    return(
        <div className={"recipeCard"}>
            <div className={"recipeContainer"}>
                <img src={image} alt={name} />
                <p>{name}</p>
               
            </div>

        </div>
    )

}

export default RecipeCard;