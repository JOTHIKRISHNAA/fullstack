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
@Table(name = "foodmenu")
public class FoodMenu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long foodMenuId;

    @Column(name = "foodMenuType", nullable = false)
    private String foodMenuType;

    @Column(name = "foodMenuPrice", nullable = false)
    private String foodMenuPrice;

    @Column(name = "foodMenuItems", nullable = false)
    private String foodMenuItems;


}
