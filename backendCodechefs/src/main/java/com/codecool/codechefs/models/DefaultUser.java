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

    public DefaultUser(String name, String email, String password, Role role) {
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
    }

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    @OneToMany
    private List<Recipe> recipesBought;

    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private Role role ;

 }
