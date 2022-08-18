package com.codecool.codechefs.config;

import com.codecool.codechefs.dao.RecipeDao;
import com.codecool.codechefs.dao.RecipeStorage;
import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;
import com.codecool.codechefs.services.RecipeService;
import org.springframework.context.annotation.*;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class DAOMemConfig {

    @Bean
    public RecipeDao createRecipeDao(List<Recipe> recipes){
        return new RecipeStorage(recipes);
    }

    @Bean
    public RecipeService createRecipeService(RecipeDao recipeDao){
      return new RecipeService(recipeDao);
    }

    @Bean
    public List<Recipe> createRecipeList() {
        List<Recipe> recipes = new ArrayList<>();
        Recipe zsiros = new Recipe("Zsíros kenyér", "Ingredients \n" +
                "grease\n" +
                "slice of bread\n" +
                "onion (optional)\n" +
                "salt" +
                "Method: \n" +
                "Take the grease and spread it on the bread slice", RecipeCategory.MAIN_DISH, 0);

        zsiros.setId(1);
        recipes.add(zsiros);
        Recipe makos = new Recipe("Mákos tészta", "Ingredients\n" +
                "ground poppy seed\n" +
                "pasta\n" +
                "powdered sugar" +
                "Method: \n" +
                "1. Cook the pasta\n" +
                "2. Mix poppy seed and powdered sugar 2:1\n" +
                "3. Sprinkle the cooked pasta with the poppy-sugar mix. ", RecipeCategory.DESSERT, 0);
        makos.setId(2);
        recipes.add(makos);

        Recipe koleves = new Recipe("Stone soup", "Ingredients:\n" +
                "stone\n" +
                "water\n" +
                "vegetables (optional)\n" +
                "salt\n" +
                "Method:\n" +
                "1 put stone into a pot of water\n" +
                "2 put vegetables and seasoning if needed\n" +
                "3 cook them", RecipeCategory.SOUP, 0);
        koleves.setId(3);
        recipes.add(koleves);
        return recipes;

    }
}
