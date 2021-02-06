package com.example.librarysystem.repository;

import com.example.librarysystem.model.Booking;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Long> {
    Optional<Booking> findTopByBookIdOrderByIdDesc(Long id);

    Optional<Booking> findTopByUsernameOrderByIdDesc(String username);
}
