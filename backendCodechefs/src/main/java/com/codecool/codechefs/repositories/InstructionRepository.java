package com.codecool.codechefs.repositories;

import com.codecool.codechefs.models.Instruction;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InstructionRepository extends JpaRepository<Instruction, Long> {
}
