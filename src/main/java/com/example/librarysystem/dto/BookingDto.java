package com.example.librarysystem.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.Instant;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class BookingDto {

    private Long id;
    private String username;
    private Instant timeToTake;
    private Instant timeToReturn;
    private Long bookId;
}
