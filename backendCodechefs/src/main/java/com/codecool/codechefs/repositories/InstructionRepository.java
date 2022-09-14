package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InstructionRepository extends JpaRepository<Instruction, Long> {
}
