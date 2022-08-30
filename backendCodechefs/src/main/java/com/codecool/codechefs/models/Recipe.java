package com.codecool.codechefs.models;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Recipe {
    private int id;

    private String name;

    private String description;

    private List<Ingredient> ingredients;

    private RecipeCategory category;

    private double rating;

    private int servings;


    public Recipe(String name, RecipeCategory category, List<Ingredient> ingredients, String description, int servings) {
        this.name = name;
        this.ingredients = ingredients;
        this.description = description;
        this.category = category;
        this.servings = servings;
    }


    public void setId(int id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public RecipeCategory getCategory() {
        return category;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public List<Ingredient> getIngredients() {
        return ingredients;
    }

    public int getServings() {
        return servings;
    }

    public double getRating() {
        return rating;
    }


    @Override
    public String toString() {
        return "Recipe{" +
                ", id=" + id +
                ", name='" + name + '\'' +
                "description='" + description + '\'' +
                ", category=" + category +
                ", rating=" + rating +
                '}';
    }
}
