package com.codecool.codechefs.dao;

import com.codecool.codechefs.models.Recipe;

import java.util.List;

public class RecipeStorage {

    private List<Recipe> recipes;

    public RecipeStorage(List<Recipe> recipes) {
        this.recipes = recipes;
    }

    public List<Recipe> getRecipes() {
        return recipes;
    }
}
