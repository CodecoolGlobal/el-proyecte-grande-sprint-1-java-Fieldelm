package com.codecool.codechefs.services;
import com.codecool.codechefs.models.Ingredient;
import com.codecool.codechefs.models.Instruction;
import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;
import com.codecool.codechefs.repositories.IngredientRepository;
import com.codecool.codechefs.repositories.InstructionRepository;
import com.codecool.codechefs.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;


@Service
public class RecipeService {

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private InstructionRepository instructionRepository;

    @Autowired
    private RecipeRepository recipeRepository;


    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    public Recipe getOne(Long id) {
        return recipeRepository.findById(id).get();
    }

    public List<Recipe> getRecipesByCategory(RecipeCategory category) {
        return recipeRepository.findAllByCategory(category);
    }

    public void addRecipe(Recipe recipe){
        for (Ingredient ingredient :recipe.getIngredients()){
            ingredientRepository.saveAndFlush(ingredient);
        }
        for (Instruction instruction:recipe.getInstructions()){
            instructionRepository.saveAndFlush(instruction);
        }
        recipe.setName(recipe.getName().toLowerCase());
        recipeRepository.saveAndFlush(recipe);


    }

    public List<Recipe> getRecipesByIngredientName(String name){
        List<Ingredient> ingredients = ingredientRepository.getIngredientByName(name);
        List<Recipe>recipes = new ArrayList<>();
        for(Ingredient ingredient: ingredients){
            recipes.add(recipeRepository.getByIngredientsContaining(ingredient));
        }
        return recipes;
    }


}
