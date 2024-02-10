package com.birthdayevent.jothikrishnaa.service;

import com.birthdayevent.jothikrishnaa.repository.AddonsRepository;
import com.birthdayevent.jothikrishnaa.repository.BookRepository;



import java.util.List;

import java.util.stream.Collectors;
import org.springframework.stereotype.Service;

import com.birthdayevent.jothikrishnaa.dto.request.AddonsRequest;

import com.birthdayevent.jothikrishnaa.dto.response.AddonsResponse;
import com.birthdayevent.jothikrishnaa.dto.response.BasicResponse;

import com.birthdayevent.jothikrishnaa.model.Addons;


import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AddonsServiceImpl implements AddonsService{

    private final AddonsRepository addonsRepository;
   
    @Override
    public BasicResponse<AddonsResponse> getAllUser() {
        List<Addons> addons=addonsRepository.findAll();
       
        List<AddonsResponse> bookResponses = addons.stream()
        .map(addon-> AddonsResponse.builder()
        .addonId(addon.getAdddonId())
        .addonName(addon.getAddonName())
        .addonPrice(addon.getAddonPrice())
        .addoneDescription(addon.getAddoneDescription())
        .build())
        .collect(Collectors.toList());
        return BasicResponse.<AddonsResponse>builder()
        .message("User Data fetched").data(bookResponses).build();
    }

      @Override
        public BasicResponse<AddonsResponse> deletebooking(Long addonId) {
            
            if (addonsRepository.existsById(addonId)) {
                addonsRepository.deleteById(addonId);
                return BasicResponse.<AddonsResponse>builder()
                    .message("Booking deleted successfully")
                    .build();
            } else {
                return BasicResponse.<AddonsResponse>builder()
                    .message("Booking not found with ID: " + addonId)
                    .build();
            }
        }

           @Override
        public BasicResponse<AddonsResponse> updateBooking(Long addonId, AddonsRequest request) {
            // Retrieve the existing booking from the repository
            Addons existingBooking = addonsRepository.findById(addonId)
                    .orElseThrow(() -> new RuntimeException("Booking not found with id: " + addonId));
        
            // Update the booking details
           existingBooking.setAdddonId(request.getAddonId());
           existingBooking.setAddonName(request.getAddonName());
           existingBooking.setAddonPrice(request.getAddonPrice());
           existingBooking.setAddoneDescription(request.getAddonPrice());
            

        
            // Save the updated booking to the repository
            addonsRepository.save(existingBooking);
        
            // Construct and return the response
            AddonsResponse updatedBookingResponse = mapToBookingResponse(existingBooking);
            return BasicResponse.<AddonsResponse>builder()
                    .message("Booking updated successfully")
                    .data(List.of(updatedBookingResponse)) // Pass a list containing a single updated booking response
                    .build();
        }


        private AddonsResponse mapToBookingResponse(Addons existingBooking) {
        
            return AddonsResponse.builder()
            .addonName(existingBooking.getAddonName())
            .addonPrice(existingBooking.getAddonPrice())
            .addoneDescription(existingBooking.getAddoneDescription())

            .build();
           
        }
}


 
 