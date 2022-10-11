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

    @Autowired
    private UserService userService;


    public List<Recipe> getAll() {
        return recipeRepository.findAll();
    }

    public Recipe getOne(Long id) {
        return recipeRepository.findById(id).get();
    }

    public List<Recipe> getRecipesByCategory(RecipeCategory category) {
        return recipeRepository.findAllByCategory(category);
    }

    public String addRecipe(Recipe recipe){
        DefaultUser creator = userService.getUserById(recipe.getCreator().getId());
        if(creator!= null){
            for (Ingredient ingredient :recipe.getIngredients()){
                ingredientRepository.saveAndFlush(ingredient);
            }
            for (Instruction instruction:recipe.getInstructions()){
                instructionRepository.saveAndFlush(instruction);
            }
            recipeRepository.saveAndFlush(recipe);
            return "ok";
        }return "failed";


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

    public String deleteById(Long id){
        Recipe recipe = recipeRepository.findById(id).get();
        if(recipe!= null){
            recipe.getIngredients().forEach(ingredient -> ingredientRepository.delete(ingredient));
            recipe.getInstructions().forEach(instruction -> instructionRepository.delete(instruction));
            recipeRepository.delete(recipe);
            return "deleted";
        }
        return "not found";

    }





}
