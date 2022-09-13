package com.codecool.codechefs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor

public class Ingredient {

    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private UnitType unitType;
    private Double value;

}
