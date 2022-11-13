package com.example.auth;

import com.example.auth.domain.AuthRole;
import com.example.auth.domain.AuthUser;
import com.example.auth.domain.Donate;
import com.example.auth.service.DonateService;
import com.example.auth.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import java.util.ArrayList;

@SpringBootApplication
public class ServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurerAdapter() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000");
            }
        };
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    @Bean
    CommandLineRunner run(UserService userService, DonateService donateService) {
        return args -> {
            donateService.saveDonate(new Donate("john3", "cool_dave", 44.5F, "2022-10-01", "awesome stream"));
            donateService.saveDonate(new Donate("john3", "sleepy_bro", 442.5F, "2022-08-12", "good luck on next game"));

            userService.saveRole(new AuthRole("ROLE_USER"));
            userService.saveRole(new AuthRole("ROLE_STEAMER"));

            userService.saveUser(new AuthUser("john3", "1234", new ArrayList<>(),
                    "", "", new ArrayList<>()));
            userService.saveUser(new AuthUser("dv44", "1234",new ArrayList<>(),
                    "", "", new ArrayList<>()));
            userService.saveUser(new AuthUser( "user", "1234", new ArrayList<>(),
                    "", "", new ArrayList<>()));
            userService.saveUser(new AuthUser("chb", "1234",new ArrayList<>(),
                    "", "", new ArrayList<>()));

            userService.addRoleToUser("john3", "ROLE_USER");
            userService.addRoleToUser("dv44", "ROLE_USER");
            userService.addRoleToUser("user", "ROLE_USER");
            userService.addRoleToUser("chb", "ROLE_STEAMER");
            userService.addRoleToUser("chb", "ROLE_USER");

            userService.addDonateToUser("john3", 1L);
            userService.addDonateToUser("john3", 2L);
        };
    }
}
