package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IngredientRepository extends JpaRepository<Ingredient, Long> {
}
