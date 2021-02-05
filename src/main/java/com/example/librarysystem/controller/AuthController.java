package com.example.librarysystem.controller;

import com.example.librarysystem.dto.AuthenticationResponse;
import com.example.librarysystem.dto.LoginRequest;
import com.example.librarysystem.dto.PersonDto;
import com.example.librarysystem.service.AuthService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth/")
@AllArgsConstructor
public class AuthController {
    private final AuthService authService;

    @PostMapping("/signup")
    public ResponseEntity<Void> savePerson(@RequestBody PersonDto personDto){
        authService.savePerson(personDto);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<AuthenticationResponse> login(@RequestBody LoginRequest loginRequest){
        AuthenticationResponse authenticationResponse = authService.login(loginRequest);
        return new ResponseEntity<>(authenticationResponse, HttpStatus.OK);
    }
}
