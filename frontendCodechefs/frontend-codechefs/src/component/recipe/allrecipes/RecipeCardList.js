import RecipeCard from "./RecipeCard";

const recipeCardList = ({list}) => {
    const cardList = list.map((recipe)=><RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} id={recipe.id} imageURL={recipe.imageURL} isFree = {recipe.isFree} price = {recipe.price}/>)
    return(
        <div className={"cardContainer"}>
            {cardList}
        </div>
    )
}

export default recipeCardList;

// => <RecipeCard key={recipe.id} name={recipe.name} description={recipe.description} id={recipe.id} imageURL={recipe.imageURL}></RecipeCard>)