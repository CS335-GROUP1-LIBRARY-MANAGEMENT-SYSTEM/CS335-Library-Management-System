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
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @NotBlank(message = "bookTitle must be filled")
    private String bookTitle;

    @NotBlank(message = "author name must be specified")
    private String author;

    @NotBlank(message = "book description must be assigned")
    private String description;

    private boolean isAvailable = true;


}
