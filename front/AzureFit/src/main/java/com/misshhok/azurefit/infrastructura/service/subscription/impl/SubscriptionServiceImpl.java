package com.misshhok.azurefit.infrastructura.service.subscription.impl;

import com.misshhok.azurefit.infrastructura.persistance.entity.Subscription;
import com.misshhok.azurefit.infrastructura.persistance.repository.SubscriptionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class SubscriptionServiceImpl {
    private final SubscriptionRepository subscriptionRepository;

    public List<Subscription> findAllSubs() {
      return subscriptionRepository.findAll();
    }
}
