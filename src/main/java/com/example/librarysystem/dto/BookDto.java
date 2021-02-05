package com.example.librarysystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@Data
@NoArgsConstructor
public class BookDto {

    private String author;
    private String bookTitle;
    private Long id;
    private boolean isAvailable;
    private String description;
}
