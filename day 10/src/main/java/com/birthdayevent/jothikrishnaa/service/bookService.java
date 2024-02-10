package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.dto.request.BookRequest;
import com.birthdayevent.jothikrishnaa.dto.request.EdetailsRequest;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.BookResponse;


public interface bookService {

    BasicResponse<BookResponse> getAllUser();
    BasicResponse<BookResponse> deletebooking(Long id);
    BasicResponse<BookResponse> updateBooking(Long bookingId, BookRequest request);

}
