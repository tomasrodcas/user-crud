package com.trodriguez.users;

import com.trodriguez.users.users.dto.UserDTO;
import com.trodriguez.users.users.dto.UserRequestDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.reactive.AutoConfigureWebTestClient;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.reactive.server.WebTestClient;

import java.util.Date;
import java.util.UUID;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@AutoConfigureWebTestClient
public class UsersApiTest {

    @Autowired
    private WebTestClient webTestClient;

    private static final String USERS_API_PATH = "/api/v1/users";

    @Test
    void shouldCreateAndRetrieveUser() {
        UserRequestDTO request = new UserRequestDTO(
                "John", "Doe", 12345678L, "K",
                new Date(), "john.doe@example.com", "securepass"
        );

        UserDTO createdUser = webTestClient.post()
                .uri(USERS_API_PATH)
                .bodyValue(request)
                .exchange()
                .expectStatus().isCreated()
                .expectBody(UserDTO.class)
                .returnResult()
                .getResponseBody();

        assertThat(createdUser).isNotNull();
        assertThat(createdUser.id()).isNotNull();

        webTestClient.get()
                .uri(USERS_API_PATH+"/" + createdUser.id())
                .exchange()
                .expectStatus().isOk()
                .expectBody(UserDTO.class)
                .value(user -> assertThat(user.email()).isEqualTo("john.doe@example.com"));
    }

    @Test
    void shouldReturn404ForNonExistingUser() {
        UUID randomId = UUID.randomUUID();

        webTestClient.get()
                .uri(USERS_API_PATH+"/"+ randomId)
                .exchange()
                .expectStatus().isNotFound();
    }

    @Test
    void shouldValidateBadRequests() {
        UserRequestDTO invalidRequest = new UserRequestDTO(
                "", "Doe", null, "K",
                new Date(), "invalid-email", "123"
        );

        webTestClient.post()
                .uri(USERS_API_PATH)
                .bodyValue(invalidRequest)
                .exchange()
                .expectStatus().isBadRequest()
                .expectBody()
                .jsonPath("$.firstNames").isEqualTo("must not be blank")
                .jsonPath("$.rutNumber").isEqualTo("must not be null")
                .jsonPath("$.email").isEqualTo("must be a well-formed email address");
    }
}
