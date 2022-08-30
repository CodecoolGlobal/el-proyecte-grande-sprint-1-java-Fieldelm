package com.codecool.codechefs.dao;

import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

public class RecipeStorage implements RecipeDao{

    // implement RecipeDao and Override the methods and his type become to RecipeDao

    private List<Recipe> recipes;

    public RecipeStorage(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    @Override
    public List<Recipe> getRecipesByCategory(RecipeCategory category) {
        return recipes.stream()
                .filter(recipe -> recipe.getCategory().equals(category))
                .collect(Collectors.toList());
    }

    @Override
    public List<Recipe> getAll() {
        return recipes;
    }

    @Override
    public Recipe getOneById(int id) throws NoSuchElementException {
        Optional<Recipe> optionRecipe=  recipes.stream().filter(recipe -> recipe.getId() == id).findFirst();

        if(optionRecipe.isPresent()){
            return optionRecipe.get();
        }else throw new NoSuchElementException();

    }

    @Override
    public void addRecipe(Recipe recipe) {

    }

    @Override
    public void deleteRecipe(int id) {

    }
}
