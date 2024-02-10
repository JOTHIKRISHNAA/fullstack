package com.birthdayevent.jothikrishnaa.dto.request;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class FoodMenuRequest {
    private long foodMenuId;
    private String foodMenuType;
    private String foodMenuPrice;
    private String foodMenuItems;

    

    
    

   
    
}
