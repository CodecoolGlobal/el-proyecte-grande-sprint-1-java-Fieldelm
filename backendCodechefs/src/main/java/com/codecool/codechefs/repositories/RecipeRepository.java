package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {
}
