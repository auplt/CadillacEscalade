package com.example.auth.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.auth.domain.AuthUser;
import com.example.auth.domain.Donate;
import com.example.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;

import static java.util.Arrays.stream;
import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Slf4j
@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/analytics")
public class AnalyticsResourse {
    private final UserService userService;
    @GetMapping("/get_balance")
    public ResponseEntity<?> getBalance(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader!= null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(token);
                String username = decodedJWT.getSubject();
                AuthUser user = userService.getUser(username);
                log.info("data {}", user.getDonates().stream().toList());
                List<Donate> donate = user.getDonates().stream().toList();
                Float balance = Float.valueOf(0);
                for (int i = 0; i < donate.size(); i++) {
                    balance += donate.get(i).getSumm();
                }
                return new ResponseEntity<>(balance, HttpStatus.OK);
            }
            catch (Exception exception) {
                log.error("Error logging in: {}", exception.getMessage());
                return new ResponseEntity<>(HttpStatus.FORBIDDEN);
            }
        }
        else {
            return new ResponseEntity<>("provide required token", HttpStatus.FORBIDDEN);
        }
    }
}
