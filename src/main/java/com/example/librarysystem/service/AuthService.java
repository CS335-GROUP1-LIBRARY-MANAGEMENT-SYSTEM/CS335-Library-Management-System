package com.example.librarysystem.service;

import com.example.librarysystem.dto.AuthenticationResponse;
import com.example.librarysystem.dto.LoginRequest;
import com.example.librarysystem.dto.PersonDto;
import com.example.librarysystem.exception.SpringRedditException;
import com.example.librarysystem.jwt.JwtConfig;
import com.example.librarysystem.jwt.JwtProvider;
import com.example.librarysystem.model.Person;
import com.example.librarysystem.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;

@Service
@AllArgsConstructor
public class AuthService {

    private final PersonRepository personRepository;
    private final PasswordEncoder passwordEncoder;

    private final AuthenticationManager authenticationManager;
    private final JwtProvider jwtProvider;
    private final JwtConfig jwtConfig;

    @Transactional
    public void savePerson(PersonDto personDto){

        Person person=new Person();
        person.setDistrict(personDto.getDistrict());
        person.setEmail(personDto.getEmail());
        person.setUsername(personDto.getUsername());
        person.setFullName(personDto.getFullName());
        person.setPassword(passwordEncoder.encode(personDto.getPassword()));
        person.setRegion(personDto.getRegion());
        person.setWard(personDto.getWard());
        person.setPhoneNumber(personDto.getPhoneNumber());
        person.setStreet(personDto.getStreet());
        person.setRole(personDto.getRole());
        person.setCreateDate(Instant.now());

        personRepository.save(person);

    }

    @Transactional(readOnly = true)
    public AuthenticationResponse login(LoginRequest loginRequest) {
        Authentication authentication=authenticationManager.authenticate(new
                UsernamePasswordAuthenticationToken(loginRequest.getUsername(),
                loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token=jwtProvider.generateToken(authentication);
        Person personByUsername = personRepository.
                findByUsername(loginRequest.getUsername()).orElseThrow(() ->
                new SpringRedditException("person with username "+loginRequest.getUsername()+" is not found"));

        return AuthenticationResponse
                .builder()
                .authenticationToken(token)
                .expireAt(Instant.now().plusMillis(jwtConfig.getExpirationTime()))
                .username(loginRequest.getUsername())
                .role(personByUsername.getRole())
                .build();

    }

    @Transactional(readOnly = true)
    public Person getCurrentUser(){
        User principal =(User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return personRepository.findByUsername(principal.getUsername()).orElseThrow(()->new SpringRedditException("user with username +"+principal.getUsername()+" no found"));
    }

    @Transactional
    public PersonDto getUserDetails(String username){
        Person person=personRepository.findByUsername(username)
                .orElseThrow(()->new SpringRedditException("user with username "+username+" is not found"));

        PersonDto personDto=new PersonDto();

        personDto.setDistrict(person.getDistrict());
        personDto.setEmail(person.getEmail());
        personDto.setUsername(person.getUsername());
        personDto.setFullName(person.getFullName());
        personDto.setPassword(person.getPassword());
        personDto.setRegion(person.getRegion());
        personDto.setWard(person.getWard());
        personDto.setPhoneNumber(person.getPhoneNumber());
        personDto.setStreet(person.getStreet());
        personDto.setRole(person.getRole());
        personDto.setCreatedDate(person.getCreateDate());
        personDto.setId(person.getId());

        return personDto;

    }
}
