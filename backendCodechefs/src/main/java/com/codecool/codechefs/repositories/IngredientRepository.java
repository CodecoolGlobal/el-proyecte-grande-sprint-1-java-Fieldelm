package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.Ingredient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface IngredientRepository extends JpaRepository<Ingredient, Long> {

    List<Ingredient> getIngredientByName(String name);
}
