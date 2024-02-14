package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.dto.request.AddonsRequest;

import com.birthdayevent.jothikrishnaa.dto.response.AddonsResponse;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.BookResponse;


public interface AddonsService {

    BasicResponse<AddonsResponse> getAllUser();
    BasicResponse<AddonsResponse> deletebooking(Long addonId);
    BasicResponse<AddonsResponse> updateBooking(Long addonId, AddonsRequest request);

}
