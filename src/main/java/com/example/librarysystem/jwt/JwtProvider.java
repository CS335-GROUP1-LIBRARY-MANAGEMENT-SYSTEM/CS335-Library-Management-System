package com.example.librarysystem.jwt;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.time.Instant;
import java.util.Date;

@AllArgsConstructor
@Service
public class JwtProvider {

    private final SecretKey secretKey;
    private final JwtConfig jwtConfig;

    public String generateToken(Authentication authentication){
        User user=(User) authentication.getPrincipal();

        return Jwts.builder()
                .setIssuedAt(Date.from(Instant.now()))
                .setSubject(user.getUsername())
                .signWith(secretKey)
                .setExpiration(Date.from(Instant.now().plusMillis(jwtConfig.getExpirationTime())))
                .compact();
    }

    public boolean validateToken(String token){
        Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);
        return true;
    }


    public String getUsernameFromJwt(String token){
        Claims claims=Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
        return  claims.getSubject();
    }
}
