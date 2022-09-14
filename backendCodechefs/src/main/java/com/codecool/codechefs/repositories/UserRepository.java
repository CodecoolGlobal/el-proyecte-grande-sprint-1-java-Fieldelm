package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.DefaultUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<DefaultUser, Long> {
}
