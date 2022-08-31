package com.codecool.codechefs.models;

public class Ingredient {
    String name;
    String unit;
    Double value;


    public Ingredient(String ingredient, String unit, Double value) {
        this.name = ingredient;
        this.unit = unit;
        this.value = value;
    }

    public String getName() {
        return name;
    }

    public void setIngredient(String ingredient) {
        this.name = name;
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
