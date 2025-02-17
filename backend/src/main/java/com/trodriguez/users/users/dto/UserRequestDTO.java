package com.trodriguez.users.users.dto;

import jakarta.validation.constraints.*;
import java.util.Date;

public record UserRequestDTO(
    @NotBlank String firstNames,
    @NotBlank String lastNames,
    @NotNull Long rutNumber,
    @NotBlank String verificationDigit,
    @NotNull Date birthDate,
    @Email String email,
    String password
) {
}
