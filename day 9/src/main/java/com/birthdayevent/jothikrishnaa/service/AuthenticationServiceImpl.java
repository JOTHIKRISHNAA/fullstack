package com.birthdayevent.jothikrishnaa.service;

import static com.birthdayevent.jothikrishnaa.enumerated.Role.USER;

import java.util.Optional;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.birthdayevent.jothikrishnaa.dto.request.LoginRequest;
import com.birthdayevent.jothikrishnaa.dto.request.RegisterRequest;

import com.birthdayevent.jothikrishnaa.dto.response.LoginResponse;
import com.birthdayevent.jothikrishnaa.dto.response.RegisterResponse;

import com.birthdayevent.jothikrishnaa.model.User;
import com.birthdayevent.jothikrishnaa.repository.UserRepository;
import com.birthdayevent.jothikrishnaa.utils.JwtUtil;

import lombok.RequiredArgsConstructor;




@Service
@RequiredArgsConstructor
@SuppressWarnings("null")
public class AuthenticationServiceImpl implements AuthenticationService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JwtUtil jwtUtil;

    @Override
    public RegisterResponse register(RegisterRequest request){
        Optional<User> isUserExists=userRepository.findByEmail(request.getEmail());
        if(isUserExists.isPresent()){

            return RegisterResponse.builder().message("User with mail id"+request.getEmail()+"is already exist").build();

        }

        var user=User.builder()
        .name(request.getName())
        .email(request.getEmail())
        .password(passwordEncoder.encode(request.getPassword()))
        .role(USER)
        .build();
        userRepository.save(user);
        return RegisterResponse.builder()
        .message("User created succesfully")
        .build();
    }

        @Override
        public LoginResponse login(LoginRequest request) {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
            var user = userRepository.findByEmail(request.getEmail()).orElseThrow();

            String token = jwtUtil.generateToken(user);
            return LoginResponse.builder().message("User logged in successfully!")
                                            .token(token)
                                            .build();
           
        }
         
}