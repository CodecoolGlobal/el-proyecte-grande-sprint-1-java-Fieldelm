package com.codecool.codechefs.controller;

import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;
import com.codecool.codechefs.services.RecipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/")
public class RecipeController {

    @Autowired
    private RecipeService recipeService;


    @GetMapping("get-all-recipes")
    public List<Recipe> getAllRecipes(){
        return recipeService.getAll();
    }

    @GetMapping(value = "get-one-recipe/{id}")
    public Recipe getOneRecipe(@PathVariable Long id){
        return recipeService.getOne(id);
    }

    @GetMapping(value = "filter-recipe-by-category")
    public List<Recipe> getRecipesByCategory(@RequestParam (name = "category")RecipeCategory category){
        return recipeService.getRecipesByCategory(category);
    }

    @PostMapping(value = "add-recipe")
    public String addRecipe(@RequestBody Recipe recipe){
        return recipeService.addRecipe(recipe);
    }

    @DeleteMapping(value = "delete")
    public String deleteRecipe(@RequestBody Long id){
        return recipeService.deleteById(id);
    }

    @GetMapping(value = "get-all-ingredients-name")
    public Set<String> getAllIngredient(){
        return recipeService.getAllIngredients();
    }

    @GetMapping(value = "get-all-units-name")
    public List<String> getAllUnitType(){
        return recipeService.getAllUnit();
    }

    /*@GetMapping(value = "filter-recipe-by-ingredients")
    public List<Recipe> getRecipesByIngredients(@RequestBody List<String> ingredients){
        return recipeService.getRecipesByIngredients(ingredients);
    }

    @GetMapping(value = "search-recipe-ba-name")
    public List<Recipe> searchRecipesByName(@RequestParam(name="name") String searchInput){
        return recipeService.searchRecipesByName(searchInput);
    }*/

}
