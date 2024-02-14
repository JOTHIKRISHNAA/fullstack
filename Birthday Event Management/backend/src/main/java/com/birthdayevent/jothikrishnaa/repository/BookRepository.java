package com.birthdayevent.jothikrishnaa.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.jothikrishnaa.model.Booking;

public interface BookRepository extends JpaRepository<Booking,Long> {

}
