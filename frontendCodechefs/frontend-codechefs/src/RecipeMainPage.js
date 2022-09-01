import React from 'react'

export const RecipeMainPage = ({recipe}) => {
  console.log(recipe.name);
 
  return (
    <div>{recipe.name}</div>
  )
}
