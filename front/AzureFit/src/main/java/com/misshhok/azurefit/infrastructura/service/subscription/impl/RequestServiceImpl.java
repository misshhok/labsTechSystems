package com.misshhok.azurefit.infrastructura.service.subscription.impl;

import com.misshhok.azurefit.infrastructura.persistance.entity.Request;
import com.misshhok.azurefit.infrastructura.persistance.repository.RequestRepository;
import com.misshhok.azurefit.infrastructura.persistance.repository.SubscriptionRepository;
import com.misshhok.azurefit.infrastructura.persistance.repository.TrainerRepository;
import com.misshhok.azurefit.infrastructura.service.trainer.dto.CreateRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
@Slf4j
public class RequestServiceImpl {
  private final RequestRepository requestRepository;
  private final TrainerRepository trainerRepository;
  private final SubscriptionRepository subscriptionRepository;

  public void createRequest(CreateRequestDto dto) {
    log.info("NEW REQUEST: {}", dto);
    Request request = new Request();

    request.setName(dto.getName());
    request.setPatronymic(dto.getPatronymic());
    request.setSurname(dto.getSurname());
    request.setPhoneNumber(dto.getPhoneNumber());

    request.setTrainer(trainerRepository.findById(dto.getTrainerId()).orElseThrow(() -> new IllegalArgumentException("Тренера с таким ID не существует")));
    request.setSubscription(subscriptionRepository.findById(dto.getSubscriptionId()).orElseThrow(() -> new IllegalArgumentException("Абонемента с таким ID не существует")));

    requestRepository.save(request);
    log.info("SUCCESSFULLY ADDED NEW REQUEST: {}", request);
  }
}
