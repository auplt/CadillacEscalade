package com.example.auth.service;

import com.example.auth.domain.Donate;

import java.util.List;

public interface DonateService {
    Donate saveDonate(Donate donate);
    List<Donate> getAllDonates();
}
