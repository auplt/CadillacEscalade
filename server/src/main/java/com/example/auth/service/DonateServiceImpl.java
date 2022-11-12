package com.example.auth.service;

import com.example.auth.domain.Donate;
import com.example.auth.repo.DonateRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class DonateServiceImpl implements DonateService {

    private final DonateRepo donateRepo;
    @Override
    public Donate saveDonate(Donate donate) {
        return donateRepo.save(donate);
    }

    @Override
    public List<Donate> getAllDonates() {
        return donateRepo.findAll();
    }
}
