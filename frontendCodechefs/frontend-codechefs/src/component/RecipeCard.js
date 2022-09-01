import {Link} from "react-router-dom";

const RecipeCard = ({name, id, imageURL, key}) => {

    return (
            <div className="recipe-container">
                <Link to={`recipeCard/${id}`}  style={{ textDecoration: 'none' }} params={{recipeId: {id}}}>
                <div className="container__text">
                    <img src={imageURL} alt="Pancake"/>
                    <h1>{name}</h1>
                </div>
                </Link>
            </div>


)

}

export default RecipeCard;