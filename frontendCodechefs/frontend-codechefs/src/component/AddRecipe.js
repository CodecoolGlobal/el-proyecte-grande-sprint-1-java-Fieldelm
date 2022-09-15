import Header from "./Header";
import IngredientDropItem from "./IngredientDropItem";
import IngredientsDropDown from "./IngredientsDropDown";

const AddRecipe = () => {
    return (
        <div>
            <Header/>
            <form action="/action_page.php" className="container">
                <h1>Add your recipe</h1>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required></input>

                <IngredientsDropDown/>



                <button type="submit" className="btn">Login</button>
            </form>
        </div>
)
}

export default AddRecipe;