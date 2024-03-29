package com.birthdayevent.jothikrishnaa.config;

import static com.birthdayevent.jothikrishnaa.utils.MyConstant.HEADERS;
import static com.birthdayevent.jothikrishnaa.utils.MyConstant.METHODS;
import static com.birthdayevent.jothikrishnaa.utils.MyConstant.ORGINS;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;

import org.springframework.security.config.annotation.web.builders.HttpSecurity;

import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import com.birthdayevent.jothikrishnaa.utils.MyConstant;

import lombok.RequiredArgsConstructor;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor

public class SecurityConfig {

    
        private final AuthenticationProvider authenticationProvider;
        private final JwtAuthenticationConfig jwtAuthenticationConfig;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception{

        httpSecurity.csrf(AbstractHttpConfigurer::disable).cors(cors ->cors.configurationSource(corsConfigurationSource()))
        .authorizeHttpRequests(authorize->authorize.requestMatchers(MyConstant.AUTH + "/**","/swagger-ui/**","swagger-ui.html/","/v3/api-docs/**").permitAll().anyRequest().authenticated())
        .sessionManagement(session->session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .authenticationProvider(authenticationProvider)
        .addFilterBefore(jwtAuthenticationConfig,UsernamePasswordAuthenticationFilter.class);
        return httpSecurity.build();


    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource(){

        CorsConfiguration corsConfiguration=new CorsConfiguration();
        corsConfiguration.setAllowedOrigins(ORGINS);
        corsConfiguration.setAllowedHeaders(HEADERS);
        corsConfiguration.setAllowedMethods(METHODS);
        corsConfiguration.setAllowCredentials(true);
        // source.registerCorsConfiguration("/**",corsConfiguration);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**",corsConfiguration);
        return source;

    }

}
