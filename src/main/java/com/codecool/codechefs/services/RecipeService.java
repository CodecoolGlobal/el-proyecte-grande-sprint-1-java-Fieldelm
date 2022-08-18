package com.codecool.codechefs.services;

import com.codecool.codechefs.dao.RecipeDao;
import com.codecool.codechefs.dao.RecipeStorage;
import com.codecool.codechefs.models.Recipe;

import java.util.List;

public class RecipeService {

    private RecipeDao recipeDao;

    public RecipeService(RecipeDao recipeDao) {
        this.recipeDao = recipeDao;
    }

    public String getAll(){
        List<Recipe> recipes = recipeDao.getAll();
        return "";
    }
}
