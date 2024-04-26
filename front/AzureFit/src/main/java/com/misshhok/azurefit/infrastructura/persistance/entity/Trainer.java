package com.misshhok.azurefit.infrastructura.persistance.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import java.util.LinkedHashSet;
import java.util.Set;

@Data
@Entity
@Table(name = "trainers")
public class Trainer {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id", nullable = false)
  private Long id;

  @Size(max = 255)
  @NotNull
  @Column(name = "name", nullable = false)
  private String name;

  @Size(max = 255)
  @NotNull
  @Column(name = "surname", nullable = false)
  private String surname;

  @Column(name = "price_per_visit")
  private Float pricePerVisit;

  @Column(name = "link_to_photo")
  private String linkToPhoto;

  @Column(name = "age")
  private Integer age;

  @Column(name = "about")
  private String about;

  @OneToMany(mappedBy = "trainer")
  private Set<Subscription> subscriptions = new LinkedHashSet<>();

}