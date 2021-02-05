package com.example.librarysystem.controller;

import com.example.librarysystem.dto.BookDto;
import com.example.librarysystem.dto.BookingDto;
import com.example.librarysystem.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/booking/")
@AllArgsConstructor
public class BookingController {

    private final BookService bookService;

    @PostMapping("/save")
    public ResponseEntity<Void> saveBook(@RequestBody BookDto bookDto){
        bookService.saveBook(bookDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/getAllBooks")
    public ResponseEntity<List<BookDto>> getAllBooks()
    {
        List<BookDto> books = bookService.getBooks();
        return new ResponseEntity<>(books,HttpStatus.OK);

    }

    @PostMapping("/booking")
    public ResponseEntity<Void> booking(@RequestBody BookingDto bookingDto){
        bookService.booking(bookingDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/getBook/{id}")
    public ResponseEntity<BookDto> getBook(@PathVariable Long id){
        BookDto book = bookService.getBook(id);
        return new ResponseEntity<>(book,HttpStatus.OK);
    }

    @PutMapping("/editBoo/{id}")
    public  ResponseEntity<Void> editBook(@PathVariable Long id){
        bookService.editBook(id);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }



}
