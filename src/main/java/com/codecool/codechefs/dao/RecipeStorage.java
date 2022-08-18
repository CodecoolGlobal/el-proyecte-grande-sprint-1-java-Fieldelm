package com.codecool.codechefs.dao;

import com.codecool.codechefs.models.Recipe;

import java.util.List;

public class RecipeStorage implements RecipeDao{

    // implement RecipeDao and Override the methods and his type become to RecipeDao

    private List<Recipe> recipes;

    public RecipeStorage(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    @Override
    public List<Recipe> getAll() {
        return null;
    }

    @Override
    public Recipe getOne(int id) {
        return null;
    }

    @Override
    public void addRecipe(Recipe recipe) {

    }

    @Override
    public void deleteRecipe(int id) {

    }
}
