package com.misshhok.azurefit.ui.web.controller;

import com.misshhok.azurefit.infrastructura.service.subscription.impl.RequestServiceImpl;
import com.misshhok.azurefit.infrastructura.service.subscription.impl.SubscriptionServiceImpl;
import com.misshhok.azurefit.infrastructura.service.trainer.dto.CreateRequestDto;
import com.misshhok.azurefit.infrastructura.service.trainer.impl.TrainerServiceImpl;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
@Slf4j
public class PageController {
  private final TrainerServiceImpl trainerService;
  private final SubscriptionServiceImpl subscriptionService;
  private final RequestServiceImpl requestService;
  @GetMapping
  public String getHomePage(Model model) {
    return "index";
  }

  @GetMapping("about/")
  public String getAboutPage(Model model) {
    return "about";
  }

  @GetMapping("services/")
  public String getServicesPage(Model model) {
    return "services";
  }

  @GetMapping("subscriptions/")
  public String getIndividualSubscriptionPage(Model model) {
    model.addAttribute("subs", subscriptionService.findAllSubs());
    return "subscription";
  }

  @GetMapping("trainers/")
  public String getTrainersPage(Model model) {
    model.addAttribute("trainers", trainerService.findAllTrainers());
    return "trainers";
  }


  @GetMapping("fitness-bar/")
  public String getFitnessBarPage(Model model) {
    return "fitness-bar";
  }

  @GetMapping("game-sports/")
  public String getGameSportsPage(Model model) {
    return "game-sports";
  }

  @GetMapping("group-services/")
  public String getGroupServicesPage(Model model) {
    return "group-services";
  }

  @GetMapping("gym/")
  public String getGymPage(Model model) {
    return "gym";
  }

  @GetMapping("kids-fitness/")
  public String getKidsFitnessPage(Model model) {
    return "kids-fitness";
  }

  @GetMapping("personal-training/")
  public String getPersonalTrainingPage(Model model) {
    return "personal-training";
  }

  @GetMapping("swimming-pool/")
  public String getSwimmingPoolPage(Model model) {
    return "swimming-pool";
  }

  @GetMapping("tennis/")
  public String getTennisPage(Model model) {
    return "tennis";
  }

  @GetMapping("subscriptions/request/")
  public String getSubscriptionForm(Model model) {
    model.addAttribute("request", new CreateRequestDto());
    model.addAttribute("trainers", trainerService.findAllTrainers());
    model.addAttribute("subs", subscriptionService.findAllSubs());
    return "subscription-form";
  }

  @PostMapping("subscriptions/request/")
  public String createModel(Model model, @ModelAttribute CreateRequestDto request) {
    model.addAttribute("request", request);
    requestService.createRequest(request);
    return "redirect:/subscriptions/";
  }
}
