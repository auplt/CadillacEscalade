package com.example.auth.repo;

import com.example.auth.domain.Donate;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DonateRepo extends JpaRepository<Donate, Long> {
}
