package com.codecool.codechefs.controller;


import com.codecool.codechefs.models.DefaultUser;
import com.codecool.codechefs.security.PasswordConfig;
import com.codecool.codechefs.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    private final UserService userService;

    private final PasswordConfig passwordConfig;
    @Autowired
    public RegisterController(UserService userService, PasswordConfig passwordConfig) {
        this.userService = userService;
        this.passwordConfig = passwordConfig;
    }

    @PostMapping(value = "/register")
    public void registerUser(@RequestBody DefaultUser defaultUser){
        defaultUser.setPassword(passwordConfig.passwordEncoder().encode(defaultUser.getPassword()));
        userService.saveUser(defaultUser);
    }

}
