package com.trodriguez.users.users;

import jakarta.persistence.*;
import lombok.*;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "users")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String firstNames;
    private String lastNames;
    private Long rutNumber;
    private String verificationDigit;
    private Date birthDate;

    @Column(unique = true)
    private String email;

    private String password;
}
