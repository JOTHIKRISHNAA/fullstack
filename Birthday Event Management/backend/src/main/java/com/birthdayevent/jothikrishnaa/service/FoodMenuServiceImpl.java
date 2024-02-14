package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.repository.AddonsRepository;
import com.birthdayevent.jothikrishnaa.repository.BookRepository;
import com.birthdayevent.jothikrishnaa.repository.FoodMenuRepository;

import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.birthdayevent.jothikrishnaa.dto.request.AddonsRequest;
import com.birthdayevent.jothikrishnaa.dto.request.FoodMenuRequest;
import com.birthdayevent.jothikrishnaa.dto.response.AddonsResponse;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;
import com.birthdayevent.jothikrishnaa.dto.response.FoodMenuResponse;
import com.birthdayevent.jothikrishnaa.model.Addons;
import com.birthdayevent.jothikrishnaa.model.FoodMenu;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FoodMenuServiceImpl implements FoodMenuService{

    private final FoodMenuRepository foodMenuRepository;
   
    @Override
    public BasicResponse<FoodMenuResponse> getAllUser() {
        List<FoodMenu> foods=foodMenuRepository.findAll();
       
        List<FoodMenuResponse> bookResponses = foods.stream()
        .map(foodmenu-> FoodMenuResponse.builder()
        .foodMenuId(foodmenu.getFoodMenuId())
        .foodMenuItems(foodmenu.getFoodMenuItems())
        .foodMenuPrice(foodmenu.getFoodMenuPrice())
        .foodMenuType(foodmenu.getFoodMenuType())
    
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<FoodMenuResponse>builder()
        .message("User Data fetched").data(bookResponses).build();
    }

      @Override
        public BasicResponse<FoodMenuResponse> deletebooking(Long foodMenuId) {
            
            if (foodMenuRepository.existsById(foodMenuId)) {
                foodMenuRepository.deleteById(foodMenuId);
                return BasicResponse.<FoodMenuResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<FoodMenuResponse>builder()
                    .message("Booking not found with ID: " + foodMenuId)
                    .build();
            }
        }

           @Override
        public BasicResponse<FoodMenuResponse> updateBooking(Long foodMenuId, FoodMenuRequest request) {
            // Retrieve the existing booking from the repository
            FoodMenu existingBooking = foodMenuRepository.findById(foodMenuId)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + foodMenuId));
        
            // Update the booking details
            existingBooking.setFoodMenuId(request.getFoodMenuId());
            existingBooking.setFoodMenuItems(request.getFoodMenuItems());
            existingBooking.setFoodMenuPrice(request.getFoodMenuPrice());
            existingBooking.setFoodMenuType(request.getFoodMenuType());
           
            // Save the updated booking to the repository
            foodMenuRepository.save(existingBooking);
        
            // Construct and return the response
            FoodMenuResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<FoodMenuResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }


        private FoodMenuResponse mapToBookingResponse(FoodMenu existingBooking) {
        
            return FoodMenuResponse.builder()

            .foodMenuId(existingBooking.getFoodMenuId())
            .foodMenuItems(existingBooking.getFoodMenuItems())
            .foodMenuPrice(existingBooking.getFoodMenuPrice())
            .foodMenuType(existingBooking.getFoodMenuType())
            

            .build();
           
        }
}


 
 