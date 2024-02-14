package com.birthdayevent.jothikrishnaa.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.UserResponse;
import com.birthdayevent.jothikrishnaa.model.User;
import com.birthdayevent.jothikrishnaa.repository.UserRepository;


import lombok.RequiredArgsConstructor;


@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;
   @Override
   public BasicResponse<UserResponse> getAllUser(){

    List<User> users=userRepository.findAll();
    List<UserResponse> userResponse=users.stream().map(user->UserResponse.builder()
         .id(user.getId())
         .name(user.getName())
         .email(user.getEmail())
         .build()
    )
         .collect(Collectors.toList());
         return BasicResponse.<UserResponse>builder()
         .message("User data fetch succesfully!")
         .data(userResponse)
         .build();

   }


}
