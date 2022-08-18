package com.codecool.codechefs.controller;

import com.codecool.codechefs.services.RecipeService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class Controller {

    private RecipeService recipeService;


    @GetMapping(value = "get-all-recepies")
    @ResponseBody
    public String getAllRecipes(){
        return "kaktuszok";
    }

    @GetMapping(value = "get-one-recipe/{id}")
    public String getOneRecipe(@PathVariable int id){
        return String.format("%s kaktusz", id);
    }



}
