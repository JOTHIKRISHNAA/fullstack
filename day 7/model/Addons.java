package com.birthdayevent.jothikrishnaa.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name = "addons")
public class Addons {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long adddonId;

    @Column(name = "addon_name", nullable = false)
    private String addonName;

    @Column(name = "addon_description", nullable = false)
    private String addoneDescription;

    @Column(name = "addon_price", nullable = false)
    private String addonPrice;


}
