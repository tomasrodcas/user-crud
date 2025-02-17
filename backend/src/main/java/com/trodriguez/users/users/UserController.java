package com.trodriguez.users.users;

import com.trodriguez.users.users.dto.UserDTO;
import com.trodriguez.users.users.dto.UserRequestDTO;
import com.trodriguez.users.users.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserDTO> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public UserDTO getUserById(@PathVariable UUID id) {
        return userService.getUserById(id);
    }

    @PostMapping
    public ResponseEntity<UserDTO> createUser(@Valid @RequestBody UserRequestDTO userRequest) {
        return ResponseEntity.status(HttpStatus.CREATED).body(userService.createUser(userRequest));
    }

    @PutMapping("/{id}")
    public UserDTO updateUser(@PathVariable UUID id, @Valid @RequestBody UserRequestDTO userRequest) {
        return userService.updateUser(id, userRequest);
    }

    @DeleteMapping("/{id}")
    public boolean deleteUser(@PathVariable UUID id) {
        userService.deleteUser(id);
        return true;
    }
}
