package com.example.auth.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Donate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;
    private String name;
    private Float summ;
    private String date;
    private String comment;

    public Donate(String name, Float summ, String date, String comment) {
        this.name = name;
        this.summ = summ;
        this.date = date;
        this.comment = comment;
    }
}
