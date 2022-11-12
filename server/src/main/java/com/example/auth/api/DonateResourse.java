package com.example.auth.api;

import com.example.auth.domain.Donate;
import com.example.auth.service.DonateService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequiredArgsConstructor
@RequestMapping("/api/v1/donate")
public class DonateResourse {
    private final DonateService donateService;

    @GetMapping("/get_all_donates")
    public ResponseEntity<List<Donate>> getAllDonates() {
        return ResponseEntity.ok().body(donateService.getAllDonates());
    }
    @PostMapping("/save")
    public ResponseEntity<Donate> addDonate(@RequestBody Donate donate) {
        return ResponseEntity.ok().body(donateService.saveDonate(donate));
    }
}
