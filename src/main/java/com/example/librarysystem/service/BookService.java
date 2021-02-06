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

    private final BookRepository bookRepository;
    private final BookingRepository bookingRepository;
    private final PersonRepository personRepository;

    @Transactional
    public void saveBook(BookDto bookDto) {

        Book book = new Book();
        book.setBookTitle(bookDto.getBookTitle());
        book.setAuthor(bookDto.getAuthor());
        book.setDescription(bookDto.getDescription());
        bookRepository.save(book);
    }


    @Transactional(readOnly = true)
    public List<BookDto> getBooks() {


        List<Book> books = bookRepository.findAll();
        List<BookDto> bookDto = new ArrayList<>();

        for (Book book : books
        ) {
            BookDto bookDto1 = new BookDto();
            bookDto1.setBookTitle(book.getBookTitle());
            bookDto1.setAuthor(book.getAuthor());
            bookDto1.setDescription(book.getDescription());
            bookDto1.setId(book.getId());
            bookDto1.setAvailable(book.isAvailable());

            bookDto.add(bookDto1);
        }

        return bookDto;
    }

    @Transactional
    public void booking(BookingDto bookingDto) {

        personRepository.findByUsername(bookingDto.getUsername()).orElseThrow
                (() -> new SpringRedditException("user with username " + bookingDto.getUsername() + " is not found"));

        Book book = bookRepository.findById(bookingDto.getBookId())
                .orElseThrow(() -> new SpringRedditException("book with id " + bookingDto.getBookId() + "  is not found"));

        Optional<Booking> booking1 = bookingRepository.findTopByUsernameOrderByIdDesc(bookingDto.getUsername());
        Booking booking = new Booking();


        if (booking1.isPresent()&&booking1.get().isReturned()) {

            booking.setTimeToReturn(Instant.now().plusMillis(60000000));
            booking.setUsername(bookingDto.getUsername());
            booking.setTimeToTake(Instant.now());
            booking.setBookId(bookingDto.getBookId());

            bookingRepository.save(booking);
            book.setAvailable(false);
            bookRepository.save(book);

        }else if (!booking1.isPresent()){
            booking.setTimeToReturn(Instant.now().plusMillis(60000000));
            booking.setUsername(bookingDto.getUsername());
            booking.setTimeToTake(Instant.now());
            booking.setBookId(bookingDto.getBookId());

            bookingRepository.save(booking);
            book.setAvailable(false);
            bookRepository.save(book);
        }else {
            throw new SpringRedditException("your not allowed to borrow new book until you return the first one");
        }

    }

    @Transactional(readOnly = true)
    public BookDto getBook(Long id) {
        Book bookById = bookRepository.findById(id).
                orElseThrow(() -> new SpringRedditException("book with id " + id + "  is not found"));
        BookDto bookDto = new BookDto();
        bookDto.setBookTitle(bookById.getBookTitle());
        bookDto.setAuthor(bookById.getAuthor());
        bookDto.setDescription(bookById.getDescription());
        bookDto.setId(bookById.getId());
        bookDto.setAvailable(bookById.isAvailable());

        return bookDto;
    }

    @Transactional
    public void editBook(Long id) {

        Book bookById = bookRepository.findById(id).
                orElseThrow(() -> new SpringRedditException("book with id " + id + "  is not found"));
        Booking booking = bookingRepository.findTopByBookIdOrderByIdDesc(id)
                .orElseThrow(() -> new SpringRedditException("book with id " + id + "  is not found in booking table"));
        booking.setReturned(true);
        bookingRepository.save(booking);
        bookById.setAvailable(true);
        bookRepository.save(bookById);
    }

    @Transactional
    public boolean isUserBorrowedABook(String username){
        Optional<Booking> user = bookingRepository.findTopByUsernameOrderByIdDesc(username);
        return user.isPresent() && !user.get().isReturned();
    }


}
