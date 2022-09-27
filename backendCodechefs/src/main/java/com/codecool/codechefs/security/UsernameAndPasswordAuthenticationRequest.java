package com.codecool.codechefs.security;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class UsernameAndPasswordAuthenticationRequest {

    private String username;
    private String password;


}
