package com.codecool.codechefs.models;

public class Ingredient {
    String ingredient;
    String unit;
    Double value;


    public Ingredient(String ingredient, String unit, Double value) {
        this.ingredient = ingredient;
        this.unit = unit;
        this.value = value;
    }

    public String getIngredient() {
        return ingredient;
    }

    public void setIngredient(String ingredient) {
        this.ingredient = ingredient;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }


}
