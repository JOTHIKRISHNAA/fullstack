package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.dto.request.EdetailsRequest;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.EdetailsResponse;

public interface EdetailsService {

    BasicResponse<EdetailsResponse> getAllUser();
    BasicResponse<EdetailsResponse> deletebooking(Long id);
    BasicResponse<EdetailsResponse> updateBooking(Long id, EdetailsRequest request);

}
