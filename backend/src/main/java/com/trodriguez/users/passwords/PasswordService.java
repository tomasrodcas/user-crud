package com.trodriguez.users.passwords;

import de.mkammerer.argon2.Argon2;
import de.mkammerer.argon2.Argon2Factory;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;
import java.util.Base64;
import java.util.Random;

@Service
public class PasswordService {

    private static final String CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+";
    private static final int PASSWORD_LENGTH_RECOMMENDED_BY_OWASP = 16;

    private final Argon2 argon2;
    private final SecureRandom secureRandom;

    private static final Integer ARGON2_ITERATIONS_RECOMMENDED_BY_OWASP = 4;
    private static final Integer ARGON2_MEMORY_IN_KB_RECOMMENDED_BY_OWASP = 65536;
    private static final Integer ARGON2_PARALLELISM_RECOMMENDED_BY_OWASP = 1;

    public PasswordService() {
        this.argon2 = Argon2Factory.create(Argon2Factory.Argon2Types.ARGON2id);
        this.secureRandom = new SecureRandom();

    }

    public String hashPassword(String password) {
        return argon2.hash(ARGON2_ITERATIONS_RECOMMENDED_BY_OWASP, ARGON2_MEMORY_IN_KB_RECOMMENDED_BY_OWASP, ARGON2_PARALLELISM_RECOMMENDED_BY_OWASP, password.toCharArray());
    }

    public boolean verifyPassword(String hash, String password) {
        return argon2.verify(hash, password.toCharArray());
    }

    public String[] generateRandomPassword() {
        String password = generateSecureRandomString(PASSWORD_LENGTH_RECOMMENDED_BY_OWASP);
        String hashedPassword = hashPassword(password);
        return new String[]{password, hashedPassword};
    }

    private String generateSecureRandomString(int length) {
        StringBuilder password = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            password.append(CHARACTERS.charAt(secureRandom.nextInt(CHARACTERS.length())));
        }
        return password.toString();
    }
}