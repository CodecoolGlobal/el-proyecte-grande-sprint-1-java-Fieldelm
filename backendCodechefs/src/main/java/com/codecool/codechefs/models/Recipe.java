package com.codecool.codechefs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany
    private List<Instruction> instructions ;

    @OneToMany
    private List<Ingredient> ingredients;

    private RecipeCategory category;

    private double rating;

    private int servings;

    private String imageURL;


    public boolean containIngredient(String ingredientName){
        return ingredients.stream().anyMatch(ingredient -> ingredient.getName().equals(ingredientName));
    }

    @Override
    public String toString() {
        return "Recipe{" +
                ", id=" + id +
                ", name='" + name + '\'' +
                "description='" + instructions + '\'' +
                ", category=" + category +
                ", rating=" + rating +
                '}';
    }
}
