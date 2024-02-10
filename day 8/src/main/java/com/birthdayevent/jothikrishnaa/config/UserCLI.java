package com.birthdayevent.jothikrishnaa.config;

import static com.birthdayevent.jothikrishnaa.enumerated.Role.ADMIN;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.birthdayevent.jothikrishnaa.model.User;
import com.birthdayevent.jothikrishnaa.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
@SuppressWarnings("null")
public class UserCLI implements CommandLineRunner{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    
    @Override
    public void run(String... args) throws Exception {
        
        if(userRepository.count()>0)
               return;
        var user=User.builder()
                 .name("Admin")
                 .email("admin@123")
                 .password(passwordEncoder.encode("Admin@123"))
                 .role(ADMIN)
                 .build();
        userRepository.save(user);
    }

}
