import RecipeCard from "./RecipeCard";

const recipeCardList = ({list}) => {
    const cardList = list.map(recipe => <RecipeCard name={recipe.name} description={recipe.description} id={recipe.id}></RecipeCard>)

    return(
        <div className={"cardContainer"}>
            {cardList}
        </div>
    )
}

export default recipeCardList;