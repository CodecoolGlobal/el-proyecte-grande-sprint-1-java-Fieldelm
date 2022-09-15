package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.Ingredient;
import com.codecool.codechefs.models.Recipe;
import com.codecool.codechefs.models.RecipeCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long> {

    List<Recipe> findAllByCategory(RecipeCategory recipeCategory);


    Recipe getByIngredientsContaining(Ingredient ingredient);



}
