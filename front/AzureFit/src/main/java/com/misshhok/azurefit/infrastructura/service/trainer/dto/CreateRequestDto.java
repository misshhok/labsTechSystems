package com.misshhok.azurefit.infrastructura.service.trainer.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;
import lombok.Value;
import java.io.Serializable;

/**
 * DTO for {@link com.misshhok.azurefit.infrastructura.persistance.entity.Request}
 */
@Data
public class CreateRequestDto implements Serializable {
  @NotNull
  @Size(max = 255)
  private String name;
  @NotNull
  @Size(max = 255)
  private String surname;
  @Size(max = 255)
  private String patronymic;
  @Size(max = 255)
  private String phoneNumber;
  private Long trainerId;
  private Long subscriptionId;
}