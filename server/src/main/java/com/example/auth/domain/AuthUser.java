package com.example.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "USERS")
public class AuthUser {

    @Id
    @SequenceGenerator(
            name = "authuser_sequence",
            sequenceName = "user_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "authuser_sequence"
    )
    private Long id;

    private String username;
    private String password;
    private String phoneNumber;
    private String email;
    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<AuthRole> roles = new ArrayList<>();
    @ManyToMany()
    private Collection<Donate> donates = new ArrayList<>();
    public AuthUser(String username, String password,
                    Collection<AuthRole> roles, String phoneNumber,
                    String email, Collection<Donate> donates) {
        this.username = username;
        this.password = password;
        this.roles = roles;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.donates = donates;
    }
}
