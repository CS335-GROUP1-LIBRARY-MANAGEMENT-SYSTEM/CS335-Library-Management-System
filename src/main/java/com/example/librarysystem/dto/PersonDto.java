package com.example.librarysystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.validation.constraints.NotBlank;
import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class PersonDto {

    private Long id;

    private String username;

    private String email;

    private String phoneNumber;

    private String password;

    private String ward;

    private String street;

    private String region;

    private String district;

    private String fullName;

    private String role;

    private Instant createdDate;

}
