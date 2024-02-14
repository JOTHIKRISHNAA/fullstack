package com.birthdayevent.jothikrishnaa.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.birthdayevent.jothikrishnaa.model.User;

public interface UserRepository extends JpaRepository<User,String> {

    Optional<User> findByEmail(String email);

}
