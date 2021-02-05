package com.example.librarysystem.service;

import com.example.librarysystem.dto.BookDto;
import com.example.librarysystem.dto.BookingDto;
import com.example.librarysystem.exception.SpringRedditException;
import com.example.librarysystem.model.Book;
import com.example.librarysystem.model.Booking;
import com.example.librarysystem.repository.BookRepository;
import com.example.librarysystem.repository.BookingRepository;
import com.example.librarysystem.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookService {


}
