package com.codecool.codechefs.dao;

import com.codecool.codechefs.models.Recipe;

import java.util.List;
import java.util.NoSuchElementException;

public interface RecipeDao {

    List<Recipe> getAll();

    Recipe getOneById(int id) throws NoSuchElementException;

    void addRecipe(Recipe recipe);

    void deleteRecipe(int id);

}
