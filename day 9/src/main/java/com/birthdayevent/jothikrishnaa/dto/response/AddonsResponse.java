package com.birthdayevent.jothikrishnaa.dto.response;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AddonsResponse {
    private long addonId;
    private String addonName;
    private String addoneDescription;
    private String addonPrice;

    
    

   
    
}
