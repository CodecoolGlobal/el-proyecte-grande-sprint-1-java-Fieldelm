package com.codecool.codechefs.controller;


import com.codecool.codechefs.models.DefaultUser;
import com.codecool.codechefs.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {

    private final UserService userService;

    @Autowired
    public RegisterController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping(value = "/register")
    public void registerUser(@RequestBody DefaultUser defaultUser){
        System.out.println("hali");
        userService.saveUser(defaultUser);
    }

}
