package com.codecool.codechefs.services;

import com.codecool.codechefs.models.DefaultUser;
import com.codecool.codechefs.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void saveUser(DefaultUser defaultUser){
        userRepository.saveAndFlush(defaultUser);
    }
}
