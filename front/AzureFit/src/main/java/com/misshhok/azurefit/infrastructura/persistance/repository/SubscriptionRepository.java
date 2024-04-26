package com.misshhok.azurefit.infrastructura.persistance.repository;

import com.misshhok.azurefit.infrastructura.persistance.entity.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Long> {
}