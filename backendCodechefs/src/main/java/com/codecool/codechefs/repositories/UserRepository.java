package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.DefaultUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<DefaultUser, Long> {

    DefaultUser findDefaultUserByName(String name);

    Boolean existsByEmail(String email);

    Boolean existsByName(String name);

}
