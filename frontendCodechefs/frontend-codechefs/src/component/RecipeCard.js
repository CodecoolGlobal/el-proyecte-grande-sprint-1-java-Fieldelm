import {Link} from "react-router-dom";

const RecipeCard = ({name, description, id}) => {

    return (
            <div className="recipe-container">
                <Link to={`recipeCard/${id}`} params={{recipeId: {id}}}>
                <div className="container__text">
                    <img src={"https://images.unsplash.com/photo-1549589237-9e70b6be4da8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=925&q=80"} alt="Pancake"/>
                    <h1>{name}</h1>
                    <p>
                        If you're fan of caramel cake, then you'll love our Caramel Cake Pancakes.
                        We Complete these over-the-top pancakes with Caramel Syrup.
                    </p>
                    <div className="container__text__timing">
                        <div className="container__text__timing_time">
                            <h2>Hands-on Time</h2>
                            <p>30 min</p>
                        </div>
                        <div className="container__text__timing_time">
                            <h2>Total Time</h2>
                            <p>40 min</p>
                        </div>
                        <div className="container__text__timing_time">
                            <h2>Yield</h2>
                            <p>40 min</p>
                        </div>
                    </div>



</div>
                </Link>
</div>


)

}

export default RecipeCard;