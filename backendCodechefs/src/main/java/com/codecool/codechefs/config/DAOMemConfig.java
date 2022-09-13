/*
package com.codecool.codechefs.config;

import com.codecool.codechefs.dao.RecipeDao;
import com.codecool.codechefs.dao.RecipeStorage;
import com.codecool.codechefs.models.Ingredient;
import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;
import com.codecool.codechefs.services.RecipeService;
import org.springframework.context.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Configuration
public class DAOMemConfig {

    @Bean
    public RecipeDao createRecipeDao(List<Recipe> recipes) {
        return new RecipeStorage(recipes);
    }

    @Bean
    public RecipeService createRecipeService(RecipeDao recipeDao) {
        return new RecipeService(recipeDao);
    }

    @Bean
    public List<Recipe> createRecipeList() {
        List<Recipe> recipes = new ArrayList<>();

        Recipe breadWithBaconGrease = createBreadWithBaconGrease();
        breadWithBaconGrease.setId(1);
        breadWithBaconGrease.setImageURL("/recipe_img/1.jpg");
        recipes.add(breadWithBaconGrease);

        Recipe pastaWithPoppySeed = createPastaWithPoppySeed();
        pastaWithPoppySeed.setId(2);
        pastaWithPoppySeed.setImageURL("/recipe_img/2.png");
        recipes.add(pastaWithPoppySeed);

        Recipe stoneSoup = crateStoneSoup();
        stoneSoup.setId(3);
        stoneSoup.setImageURL("/recipe_img/3.jpg");
        recipes.add(stoneSoup);

        return recipes;
    }

    private Recipe createBreadWithBaconGrease() {

        String breadWithGreaseDescription1 = "Take the grease and spread it on the bread slice";
        List<String> breadWithGreaseDescription = new ArrayList<>();
        breadWithGreaseDescription.add(breadWithGreaseDescription1);

        List<Ingredient> breadWithGreaseIngredients = new ArrayList<>();
        breadWithGreaseIngredients.add(new Ingredient("bread", "slice", 1.0));
        breadWithGreaseIngredients.add(new Ingredient("bacon grease", "tbsp", 1.0));
        breadWithGreaseIngredients.add(new Ingredient("salt", "(optional)", 0.0));

        return new Recipe("Bread with bacon grease", RecipeCategory.MAIN_DISH, breadWithGreaseIngredients, breadWithGreaseDescription, 1);

    }

    private Recipe createPastaWithPoppySeed() {

        List<String> pastaWithPoppySeedDescription = new ArrayList<>();

        String pastaWithPoppySeedDescription1 = "Cook the pasta.";
        String pastaWithPoppySeedDescription2 = "Mix poppy seed and powdered sugar";
        String pastaWithPoppySeedDescription3 = "Sprinkle the cooked pasta with the poppy-sugar mix.";

        pastaWithPoppySeedDescription.add(pastaWithPoppySeedDescription2);
        pastaWithPoppySeedDescription.add(pastaWithPoppySeedDescription1);
        pastaWithPoppySeedDescription.add(pastaWithPoppySeedDescription3);

        List<Ingredient> pastaWithPoppySeedIngredients = new ArrayList<>();

        pastaWithPoppySeedIngredients.add(new Ingredient("poppy seed ground", "tbsp", 1.5));
        pastaWithPoppySeedIngredients.add(new Ingredient("powdered sugar", "tbsp", 3.0));
        pastaWithPoppySeedIngredients.add(new Ingredient("pasta of choice", "gram", 250.0));

        return new Recipe("Pasta with poppy seed", RecipeCategory.MAIN_DISH, pastaWithPoppySeedIngredients, pastaWithPoppySeedDescription, 2);
    }

    private Recipe crateStoneSoup() {

        List<String> stoneSoupDescription = new ArrayList<>();
        String stoneSoupDescription1 = "put stone into a pot of water";
        String stoneSoupDescription2 = "put vegetables and seasoning if needed";
        String stoneSoupDescription3 = "cook them";

        stoneSoupDescription.add(stoneSoupDescription1);
        stoneSoupDescription.add(stoneSoupDescription2);
        stoneSoupDescription.add(stoneSoupDescription3);

        List<Ingredient> stoneSoupIngredients = new ArrayList<>();
        stoneSoupIngredients.add(new Ingredient("stone", "", 1.0));
        stoneSoupIngredients.add(new Ingredient("vegetables", "(optional)", 0.0));

        return new Recipe("Stone soup", RecipeCategory.SOUP, stoneSoupIngredients, stoneSoupDescription, 1);
    }
}

*/
