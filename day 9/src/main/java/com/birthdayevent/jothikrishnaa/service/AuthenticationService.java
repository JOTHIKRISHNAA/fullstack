package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.dto.request.LoginRequest;
import com.birthdayevent.jothikrishnaa.dto.request.RegisterRequest;
import com.birthdayevent.jothikrishnaa.dto.response.LoginResponse;
import com.birthdayevent.jothikrishnaa.dto.response.RegisterResponse;

public interface AuthenticationService {

    RegisterResponse register(RegisterRequest request);

    LoginResponse login(LoginRequest request);

}
