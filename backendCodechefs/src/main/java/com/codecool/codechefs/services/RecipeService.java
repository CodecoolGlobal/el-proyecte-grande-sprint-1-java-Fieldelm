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

    public String addRecipe(Recipe recipe) {
        //DefaultUser creator = userService.getUserById(recipe.getCreator().getId());
        if (recipe.getCreator() == null) {
            recipe.setCreator(userService.getUserById((long) 1));
        }else{
            DefaultUser creator = userService.getUserByName(recipe.getCreator().getName());
            recipe.setCreator(creator);
        }

        for (Ingredient ingredient : recipe.getIngredients()) {
            ingredientRepository.saveAndFlush(ingredient);
        }
        for (Instruction instruction : recipe.getInstructions()) {
            instructionRepository.saveAndFlush(instruction);
        }
        recipeRepository.saveAndFlush(recipe);
        return "ok";


}

    public Set<String> getAllIngredients() {
        return ingredientRepository.findAll().stream().
                map(ingredient -> ingredient.getName()).
                collect(Collectors.toSet());
    }

    public List<String> getAllUnit() {
        return Arrays.stream(UnitType.values()).map(Enum::name).
                collect(Collectors.toList());
    }

    public List<String> getAllCategory(){
        return Arrays.stream(RecipeCategory.values()).map(Enum::name).collect(Collectors.toList());
    }

    public String deleteById(Long id) {
        try{
        Recipe recipe = recipeRepository.findById(id).get();
        if (recipe != null) {
            recipe.getIngredients().forEach(ingredient -> ingredientRepository.delete(ingredient));
            recipe.getInstructions().forEach(instruction -> instructionRepository.delete(instruction));
            recipeRepository.delete(recipe);
            return "deleted";
        }}
        catch (Exception e){
            return "not found";
        }
        return "";

    }
    public String deleteByIds(List<Long> ids) {
        String deleted = "";

        for (Long id : ids) {
            deleted += String.format("id %d is %s, ", id, deleteById(id));
        }
       return deleted;
    }
}
