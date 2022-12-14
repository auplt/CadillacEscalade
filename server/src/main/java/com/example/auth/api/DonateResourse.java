package com.example.auth.api;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.example.auth.domain.AuthUser;
import com.example.auth.domain.Donate;
import com.example.auth.service.DonateService;
import com.example.auth.service.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;

@Slf4j
@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/donate")
public class DonateResourse {
    private final DonateService donateService;
    private final UserService userService;
    @GetMapping("/user_donates")
    public ResponseEntity<?> getUserDonates(HttpServletRequest request) {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        if (authorizationHeader!= null && authorizationHeader.startsWith("Bearer ")) {
            try {
                String token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("secret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(token);
                String username = decodedJWT.getSubject();
                AuthUser user = userService.getUser(username);
                return new ResponseEntity<>(user.getDonates(), HttpStatus.OK);
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
    @GetMapping("/get_all_donates")
    public ResponseEntity<List<Donate>> getAllDonates() {
        return ResponseEntity.ok().body(donateService.getAllDonates());
    }
    @PostMapping("/save")
    public ResponseEntity<?> addDonate(@RequestBody Donate donate) {
        try {
            donateService.saveDonate(donate);
            userService.addDonateToUser(donate.getUsername(), donate.getId());
            return new ResponseEntity<>("donate saved", HttpStatus.OK);
        }
        catch (Exception exception) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
}
