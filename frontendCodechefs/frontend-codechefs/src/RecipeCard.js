import {Link} from "react-router-dom";

const RecipeCard = ({name, description, id}) => {

    return(
        <Link to={`recipeCard/${id}`} params={{recipeId:{id}}}>
            <div className={"recipeCard"}>
                <div className={"recipeContainer"}>
                    <p>{name}</p>
                </div>

            </div>
        </Link>

    )

}

export default RecipeCard;