package com.trodriguez.users.users;

import com.trodriguez.users.users.dto.UserDTO;
import com.trodriguez.users.users.dto.UserRequestDTO;
import org.springframework.stereotype.Component;

import java.util.UUID;



@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        return new UserDTO(
                user.getId(),
                user.getFirstNames(),
                user.getLastNames(),
                user.getRutNumber(),
                user.getVerificationDigit(),
                user.getBirthDate(),
                user.getEmail()
        );
    }

    public User toEntity(UserRequestDTO userRequest) {
        return new User(
                null,
                userRequest.firstNames(),
                userRequest.lastNames(),
                userRequest.rutNumber(),
                userRequest.verificationDigit(),
                userRequest.birthDate(),
                userRequest.email(),
                "asdasd"
        );
    }
}