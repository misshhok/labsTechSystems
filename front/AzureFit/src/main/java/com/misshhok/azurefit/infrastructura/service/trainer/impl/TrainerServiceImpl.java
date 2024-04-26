package com.misshhok.azurefit.infrastructura.service.trainer.impl;

import com.misshhok.azurefit.infrastructura.persistance.entity.Trainer;
import com.misshhok.azurefit.infrastructura.persistance.repository.TrainerRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class TrainerServiceImpl {
  private final TrainerRepository trainerRepository;

  public List<Trainer> findAllTrainers() {
    return trainerRepository.findAll();
  }
}
