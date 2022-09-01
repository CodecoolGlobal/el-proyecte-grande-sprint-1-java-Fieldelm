package com.codecool.codechefs.dao;

import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;

import java.util.List;
import java.util.NoSuchElementException;

public interface RecipeDao {

    List<Recipe> getRecipesByCategory(RecipeCategory category);

    List<Recipe> getAll();

    Recipe getOneById(int id) throws NoSuchElementException;

    void addRecipe(Recipe recipe);

    void deleteRecipe(int id);

    List<Recipe> getRecipesByIngredients(List<String> ingredients);

    List<Recipe> getRecipesByName(String searchString);
}
