package com.codecool.codechefs.services;
import com.codecool.codechefs.repositories.IngredientRepository;
import com.codecool.codechefs.repositories.InstructionRepository;
import com.codecool.codechefs.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RecipeService {

    @Autowired
    private IngredientRepository ingredientRepository;

    @Autowired
    private InstructionRepository instructionRepository;

    @Autowired
    private RecipeRepository recipeRepository;



}
