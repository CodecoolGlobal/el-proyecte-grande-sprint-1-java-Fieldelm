import {Link} from "react-router-dom";

const RecipeCard = ({name, description, id, imageURL}) => {

    return(
        <Link to={`recipeCard/${id}`} params={{recipeId:{id}}}>
            <div className={"recipeCard"}>
                <div className={"recipeContainer"}>
                    <img src={imageURL} alt={name} />
                    <p>{name}</p>
                </div>

            </div>
        </Link>

    )

}

export default RecipeCard;