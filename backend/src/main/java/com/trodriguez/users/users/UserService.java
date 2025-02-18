package com.trodriguez.users.users;

import com.trodriguez.users.passwords.PasswordService;
import com.trodriguez.users.users.dto.UserDTO;
import com.trodriguez.users.users.dto.UserRequestDTO;
import com.trodriguez.users.users.exception.UserNotFoundException;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final UserMapper userMapper;
    private final PasswordService passwordService;

    public UserService(UserRepository userRepository, UserMapper userMapper, PasswordService passwordService) {
        this.userRepository = userRepository;
        this.userMapper = userMapper;
        this.passwordService = passwordService;
    }

    public List<UserDTO> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::toDTO)
                .toList();
    }

    public UserDTO getUserById(UUID id) {
        return userRepository.findById(id)
                .map(userMapper::toDTO)
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public UserDTO createUser(UserRequestDTO userRequest) {
        User user = userMapper.toEntity(userRequest);

        String[] passwordData = passwordService.generateRandomPassword();
        String hashedPassword = passwordData[1];

        user.setPassword(hashedPassword);
        User savedUser = userRepository.save(user);
        return userMapper.toDTO(savedUser);
    }

    public UserDTO updateUser(UUID id, UserRequestDTO userRequest) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirstNames(userRequest.firstNames());
                    user.setLastNames(userRequest.lastNames());
                    user.setRutNumber(userRequest.rutNumber());
                    user.setVerificationDigit(userRequest.verificationDigit());
                    user.setBirthDate(userRequest.birthDate());
                    user.setEmail(userRequest.email());
                    return userMapper.toDTO(userRepository.save(user));
                })
                .orElseThrow(() -> new UserNotFoundException(id));
    }

    public void deleteUser(UUID id) {
        if (!userRepository.existsById(id)) {
            throw new UserNotFoundException(id);
        }
        userRepository.deleteById(id);
    }

}