import {Link} from "react-router-dom";

const RecipeCard = ({name, id, imageURL, isFree, price}) => {

const cost = price === 0 ? "free" : `price : ${price}`

    return (
            <div className="recipe-container">
                <Link to={`recipeCard/${id}`}  style={{ textDecoration: 'none' }} params={{recipeId: {id}}}>
                <div className="container__text">
                    <img src={imageURL} alt={name}/>
                    <h1>{name}</h1>
                    <h3>{cost}</h3>

                </div>
                </Link>
            </div>


)

}

export default RecipeCard;