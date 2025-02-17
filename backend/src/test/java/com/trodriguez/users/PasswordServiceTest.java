package com.trodriguez.users;

import static org.junit.jupiter.api.Assertions.*;

import com.trodriguez.users.passwords.PasswordService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class PasswordServiceTest {

    private PasswordService passwordService;

    @BeforeEach
    void setUp() {
        passwordService = new PasswordService();
    }

    @Test
    void testGenerateRandomPassword() {

        String[] passwordData = passwordService.generateRandomPassword();
        String rawPassword = passwordData[0];
        String hashedPassword = passwordData[1];


        assertNotNull(rawPassword, "Generated password should not be null");
        assertNotNull(hashedPassword, "Hashed password should not be null");

        assertTrue(rawPassword.length() >= 12, "Password should be at least 12 characters long");

        assertTrue(passwordService.verifyPassword(hashedPassword, rawPassword), "Hashed password should match the generated password");
    }
}
