import React from 'react'

export const RecipeMainPage = ({recipe}) => {
  console.log(recipe.name);
  
/* 
  <ul>
        {ingredients.map((element)=>(
          <li key={element.index}>
              <b>{element.quantity}</b>{" "}{element.name}
          </li>
        ))}
      </ul> */

  const ingredientList = <ul>
    {recipe.ingredients.map((ingredient)=>(
      <li key={ingredient.name}>
          {(ingredient.value !== 0.0)? ingredient.value : ""}   {ingredient.unit}   {ingredient.name}
      </li>
    ))}
  </ul>

  const description = <ol>
    {recipe.description.map((line, index)=>(
      <li key={index}>
        {line}
      </li>
    ))}
  </ol>
 
  return (
<div className="recipePageMain">
    <div className= "recipeFirst-container">
      <img src ={recipe.imageURL} alt={recipe.name} />
      <div className="recipeIngredients-container">
      <h1>{recipe.name}</h1>
      <h2>Ingredients:</h2>
        {ingredientList}
      </div>
    </div>
    <div className="recipeDescription">
    <h2>Method:</h2>
        {description}
    </div>
</div>
  )
}
