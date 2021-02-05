package com.example.librarysystem.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.Instant;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Person {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "username must not blank")
    @Column(unique = true)
    private String username;

    @NotBlank(message = "email must not blank")
    @Column(unique = true)
    private String email;

    @NotBlank(message = "phoneNumber must not blank")
    private String phoneNumber;

    @NotBlank(message = "password must not blank")
    private String password;

    @NotBlank(message = "ward must not blank")
    private String ward;

    @NotBlank(message = "street must not blank")
    private String street;

    @NotBlank(message = "region must not blank")
    private String region;

    @NotBlank(message = "district must not blank")
    private String district;

    @NotBlank(message = "fullName must not blank")
    private String fullName;

    private Instant createDate;

    private String role;

}
