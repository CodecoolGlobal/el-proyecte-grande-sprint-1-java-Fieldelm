package com.codecool.codechefs.services;

import com.codecool.codechefs.dao.RecipeDao;
import com.codecool.codechefs.dao.RecipeStorage;
import com.codecool.codechefs.models.Recipe;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class RecipeService {

    // convert recipe to JSON and add to the Controller

    private RecipeDao recipeDao;

    public RecipeService(RecipeDao recipeDao) {
        this.recipeDao = recipeDao;
    }

    public String getAll(){
        List<Recipe> recipes = recipeDao.getAll();


        return recipes.toString();
    }

    public String getOne(int id){
         return recipeDao.getOneById(id).toString();
    }

}
