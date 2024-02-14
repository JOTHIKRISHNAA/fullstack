package com.birthdayevent.jothikrishnaa.service;


import com.birthdayevent.jothikrishnaa.dto.request.FoodMenuRequest;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.FoodMenuResponse;

public interface FoodMenuService {

     BasicResponse<FoodMenuResponse> getAllUser();
    BasicResponse<FoodMenuResponse> deletebooking(Long foodMenuId);
    BasicResponse<FoodMenuResponse> updateBooking(Long fooMenuId,FoodMenuRequest request);

}
