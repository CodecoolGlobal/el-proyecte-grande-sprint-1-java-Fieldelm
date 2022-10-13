package com.codecool.codechefs.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


import javax.servlet.Filter;

@Configuration
@EnableWebSecurity
public class ApplicationSecurityConfig extends WebSecurityConfigurerAdapter {

    private DaoAuthenticationProvider daoAuthenticationProvider;

    @Autowired
    public ApplicationSecurityConfig(DaoAuthenticationProvider daoAuthenticationProvider) {
        this.daoAuthenticationProvider = daoAuthenticationProvider;
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
                .csrf().disable()
                .authorizeRequests()
                .antMatchers("/","/register", "/video/**","/news_img/**", "/login", "/get-all-recipes", "/add-recipe", "/delete-recipe","/get-one-recipe/**","/filter-recipe-by-category", "/get-all-ingredients-name", "/get-all-units-name", "/recipe_img/**" ).permitAll()
                .anyRequest()
                .authenticated();

        http
                .addFilter(new JwtUsernameAndPasswordAuthenticationFilter(authenticationManager()));


    }
}
