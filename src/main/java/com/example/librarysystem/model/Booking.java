package com.example.librarysystem.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotBlank;
import java.time.Instant;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Booking {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "Book Id must be specified")
    private Long bookId;

    @NotBlank(message =  "username for the user who take the book must be specified")
    private String username;

    private Instant timeToTake;

    @NotBlank(message = "time to return must be specified")
    private Instant timeToReturn;

}
