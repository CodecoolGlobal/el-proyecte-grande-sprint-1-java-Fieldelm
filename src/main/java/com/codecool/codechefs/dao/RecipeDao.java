package com.codecool.codechefs.dao;

import com.codecool.codechefs.models.Recipe;

import java.util.List;

public interface RecipeDao {

    List<Recipe> getAll();

    Recipe getOne(int id);

    void addRecipe(Recipe recipe);

    void deleteRecipe(int id);

}
