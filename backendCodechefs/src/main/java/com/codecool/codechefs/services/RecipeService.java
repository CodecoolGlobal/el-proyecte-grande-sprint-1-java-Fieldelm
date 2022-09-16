package com.codecool.codechefs.services;
import com.codecool.codechefs.models.*;
import com.codecool.codechefs.repositories.IngredientRepository;
import com.codecool.codechefs.repositories.InstructionRepository;
import com.codecool.codechefs.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Set;
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
        recipeRepository.saveAndFlush(recipe);
    }

    public Set<String> getAllIngredients(){
        return ingredientRepository.findAll().stream().
                map(ingredient -> ingredient.getName()).
                collect(Collectors.toSet());
    }

    public List<String> getAllUnit() {
        return Arrays.stream(UnitType.values()).map(Enum::name).
                collect(Collectors.toList());
    }


}
