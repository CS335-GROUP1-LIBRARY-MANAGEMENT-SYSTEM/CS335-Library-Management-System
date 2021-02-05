package com.example.librarysystem.service;

import com.example.librarysystem.exception.SpringRedditException;
import com.example.librarysystem.model.Person;
import com.example.librarysystem.repository.PersonRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;
import java.util.Collections;

@Service
@AllArgsConstructor
public class UserDetailsImpService implements UserDetailsService {

    private final PersonRepository personRepository;

    @Override
    @Transactional(readOnly = true)
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        Person person = personRepository.findByUsername(s).orElseThrow(() ->
                new SpringRedditException("person not found with username " + s));

        return new User(person.getUsername(),person.getPassword(),true,
                true,true,
                true,getAuthorities(person.getRole()));

    }

    private Collection<? extends GrantedAuthority> getAuthorities(String role){
        return Collections.singleton(new SimpleGrantedAuthority(role));
    }
}
