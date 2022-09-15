import Header from "./Header";
import IngredientsDropDown from "./IngredientsDropDown";
import UnitDropDown from "./UnitDropDown";

const AddRecipe = () => {
    return (
        <div>
            <Header/>
            <form action="/action_page.php" className="container">
                <h1>Add your recipe</h1>

                <label htmlFor="name"><b>Name</b></label>
                <input type="text" placeholder="Enter Name" name="name" required></input>

                <IngredientsDropDown/>

                <UnitDropDown/>

                <button type="submit" className="btn">Add your recipe</button>
            </form>
        </div>
)
}

export default AddRecipe;