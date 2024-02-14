package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.UserResponse;

public interface UserService {

    BasicResponse<UserResponse> getAllUser();

}
