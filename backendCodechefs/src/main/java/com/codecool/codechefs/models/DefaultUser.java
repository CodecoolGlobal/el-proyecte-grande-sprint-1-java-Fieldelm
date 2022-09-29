package com.codecool.codechefs.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class DefaultUser {

    public DefaultUser(String name) {
        this.name = name;
    }

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany
    private List<Recipe> recipesBought;

    private String email;

    private String password;

    private Role role ;

    @GeneratedValue
    private UUID publicKey;

}
