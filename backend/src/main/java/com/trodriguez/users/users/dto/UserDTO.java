package com.trodriguez.users.users.dto;

import java.util.Date;
import java.util.UUID;

public record UserDTO(
    UUID id,
    String firstNames,
    String lastNames,
    Long rutNumber,
    String verificationDigit,
    Date birthDate,
    String email
) {}
