package com.codecool.codechefs.models;

public class Recipe {

    private String description;

    private int id;

    private String name;

    private RecipeCategory category;

    private double rating;


    public Recipe( String name, String description, RecipeCategory category, double rating) {
        this.description = description;
        this.name = name;
        this.category = category;
        this.rating = rating;
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
}
