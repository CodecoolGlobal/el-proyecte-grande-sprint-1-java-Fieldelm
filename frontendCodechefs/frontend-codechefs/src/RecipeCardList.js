import RecipeCard from "./RecipeCard";

const recipeCardList = ({list}) => {
    const cardList = list.map(recipe => <RecipeCard name={recipe.name} imageURL={recipe.imageURL}></RecipeCard>)

    return(
        <div className={"cardContainer"}>
            {cardList}
        </div>
    )
}

export default recipeCardList;