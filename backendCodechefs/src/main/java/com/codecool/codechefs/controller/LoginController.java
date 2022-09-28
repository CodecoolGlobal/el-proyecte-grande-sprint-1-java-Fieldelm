package com.codecool.codechefs.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @GetMapping(value = "/login_user")
    public String login() {
        return "ok";
    }
}
