package com.misshhok.azurefit.infrastructura.persistance.repository;

import com.misshhok.azurefit.infrastructura.persistance.entity.Trainer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long> {
}