package com.codecool.codechefs.services;

import com.codecool.codechefs.models.DefaultUser;
import com.codecool.codechefs.models.Role;
import com.codecool.codechefs.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class UserService implements UserDetailsService {


    private UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void saveUser(DefaultUser defaultUser){
        userRepository.saveAndFlush(defaultUser);
    }

    public Boolean emailAdressNotExists(String email){
        return userRepository.existsByEmail(email);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        DefaultUser user = userRepository.findDefaultUserByName(username);
        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority(user.getRole().toString()));
        return new User(user.getName(), user.getPassword(), roles);
    }

    public Boolean emailExists(String email){
        return userRepository.existsByEmail(email);
    }
}
