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

import com.birthdayevent.jothikrishnaa.dto.request.FoodMenuRequest;

import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;


import com.birthdayevent.jothikrishnaa.dto.response.FoodMenuResponse;
import com.birthdayevent.jothikrishnaa.model.Addons;

import com.birthdayevent.jothikrishnaa.model.FoodMenu;

import com.birthdayevent.jothikrishnaa.repository.FoodMenuRepository;

import com.birthdayevent.jothikrishnaa.service.FoodMenuService;
import com.birthdayevent.jothikrishnaa.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(MyConstant.FOODMENU)
@RequiredArgsConstructor
public class FoodMenuController {
      private final FoodMenuService foodMenuService;
      private final FoodMenuRepository foodMenuRepository;

    @GetMapping(MyConstant.GETMENU)
    public ResponseEntity<BasicResponse<FoodMenuResponse>> getUser(){
        BasicResponse<FoodMenuResponse> response=new BasicResponse<>();
        try{
            response=foodMenuService.getAllUser();
            return new ResponseEntity<>(response, OK);
        }
        catch(Exception exception){
            response.setMessage("Something Went Wrong");
            return new ResponseEntity<>(response,EXPECTATION_FAILED);
        }
    }

    @SuppressWarnings("null")
    @PostMapping(MyConstant.POSTMENU)
    public FoodMenu create(@RequestBody FoodMenu models) {
        return foodMenuRepository.save(models);
    }

    @DeleteMapping(MyConstant.FOODMENU+ "/{foodMenuId}")
    public ResponseEntity<BasicResponse<FoodMenuResponse>> deleteBooking(@PathVariable Long foodMenuId) {
        BasicResponse<FoodMenuResponse> response = new BasicResponse<>();
        try {
            BasicResponse<FoodMenuResponse> deletedBookingResponse = foodMenuService.deletebooking(foodMenuId);
            response.setMessage(deletedBookingResponse.getMessage());
            return new ResponseEntity<>(response, OK);
        } catch (Exception e) {
            response.setMessage("Failed to delete booking: " + e.getMessage());
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping(MyConstant.FOODMENU+ "/{foodMenuId}")
public ResponseEntity<BasicResponse<FoodMenuResponse>> updateBooking(@PathVariable Long foodMenuId, @RequestBody FoodMenuRequest request) {
    BasicResponse<FoodMenuResponse> response = new BasicResponse<>();
    try {
        BasicResponse<FoodMenuResponse> updatedBookingResponse =foodMenuService.updateBooking(foodMenuId, request);
        response.setMessage(updatedBookingResponse.getMessage());
        response.setData(updatedBookingResponse.getData());
        return new ResponseEntity<>(response, OK);
    } catch (Exception e) {
        response.setMessage("Failed to update booking: " + e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
    }

}

private FoodMenuResponse mapToBookingResponse(Addons existingBooking) {
    // TODO Auto-generated method stub
    throw new UnsupportedOperationException("Unimplemented method 'mapToBookingResponse'");
}

    
    

    
}