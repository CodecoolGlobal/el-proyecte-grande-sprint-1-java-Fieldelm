package com.codecool.codechefs;

import com.codecool.codechefs.models.DefaultUser;
import com.codecool.codechefs.models.Role;
import com.codecool.codechefs.repositories.UserRepository;
import com.codecool.codechefs.services.UserService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
public class UserServiceTests {


    @Mock
    private UserRepository userRepository;

    @Mock
    private DefaultUser defaultUser;

    private UserService userService;

    @BeforeEach
    public void setup() {
        userService = new UserService(userRepository);
    }

    @Test
    public void loadUserByUsernameTest() {
        String name = "péter";
        String password = "123";
        Role role = Role.ADMIN;


        when(defaultUser.getPassword()).thenReturn(password);
        when(defaultUser.getRole()).thenReturn(role);
        when(defaultUser.getName()).thenReturn(name);
        when(userRepository.findDefaultUserByName(name)).thenReturn(defaultUser);

        List<SimpleGrantedAuthority> roles = new ArrayList<>();
        roles.add(new SimpleGrantedAuthority(role.toString()));
        UserDetails expectedUser = new User("péter", "123", roles);

        UserDetails actualUser = userService.loadUserByUsername(name);
        assertEquals(expectedUser, actualUser);


    }

    @Test
    public void rolesAreTurnedIntoStringsCorrectly() {
        assertEquals("ROLE_CHEF", Role.CHEF.toString());
    }
}
