package com.codecool.codechefs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Recipe {
    @Id
    @GeneratedValue
    private Long id;

    private String name;

    public Recipe(DefaultUser creator) {
        this.creator = creator;
    }

    @OneToOne
    //@JoinColumn(name = "creator_id")
    private DefaultUser creator;


    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Instruction> instructions ;

    @OneToMany(cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY)
    private List<Ingredient> ingredients;

    @Enumerated(EnumType.STRING)
    private RecipeCategory category;

    private int likes;

    private int servings;

    private String imageURL;

    private String videoURL;

    private BigDecimal price;

    private boolean isFree;


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
                ", rating=" + likes +
                '}';
    }
}
