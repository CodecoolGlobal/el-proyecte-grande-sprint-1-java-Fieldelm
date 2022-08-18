package com.codecool.codechefs.controller;

import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/")
public class Controller {

    @Autowired
    private RecipeService recipeService;


    @GetMapping(value = "get-all-recepies")
    @ResponseBody
    public List<Recipe> getAllRecipes(){
        return recipeService.getAll();
    }

    @GetMapping(value = "get-one-recipe/{id}")
    public String getOneRecipe(@PathVariable int id){
        return recipeService.getOne(id);
    }



}
