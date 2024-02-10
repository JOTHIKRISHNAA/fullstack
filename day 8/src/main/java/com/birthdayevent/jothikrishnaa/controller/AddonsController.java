package com.birthdayevent.jothikrishnaa.controller;



import static org.springframework.http.HttpStatus.EXPECTATION_FAILED;
import static org.springframework.http.HttpStatus.OK;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.birthdayevent.jothikrishnaa.dto.request.AddonsRequest;

import com.birthdayevent.jothikrishnaa.dto.response.AddonsResponse;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;

import com.birthdayevent.jothikrishnaa.dto.response.EdetailsResponse;
import com.birthdayevent.jothikrishnaa.model.Addons;
import com.birthdayevent.jothikrishnaa.model.EventDetails;
import com.birthdayevent.jothikrishnaa.repository.AddonsRepository;

import com.birthdayevent.jothikrishnaa.service.AddonsService;

import com.birthdayevent.jothikrishnaa.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.ADDON)
@RequiredArgsConstructor
public class AddonsController {
      private final AddonsService addonsService;
      private final AddonsRepository addonsRepository;

    @GetMapping(MyConstant.GETADDOn)
    public ResponseEntity<BasicResponse<AddonsResponse>> getUser(){
        BasicResponse<AddonsResponse> response=new BasicResponse<>();
        try{
            response=addonsService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @SuppressWarnings("null")
    @PostMapping(MyConstant.INSERTADDON)
    public Addons create(@RequestBody Addons models) {
        return addonsRepository.save(models);
    }

    @DeleteMapping(MyConstant.ADDON+ "/{addonId}")
    public ResponseEntity<BasicResponse<AddonsResponse>> deleteBooking(@PathVariable Long addonId) {
        BasicResponse<AddonsResponse> response = new BasicResponse<>();
        try {
            BasicResponse<AddonsResponse> deletedBookingResponse = addonsService.deletebooking(addonId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(MyConstant.ADDON+ "/{addonId}")
public ResponseEntity<BasicResponse<AddonsResponse>> updateBooking(@PathVariable Long addonId, @RequestBody AddonsRequest request) {
    BasicResponse<AddonsResponse> response = new BasicResponse<>();
    try {
        BasicResponse<AddonsResponse> updatedBookingResponse =addonsService.updateBooking(addonId, request);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

private AddonsResponse mapToBookingResponse(Addons existingBooking) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'mapToBookingResponse'");
}

    
    

    
}