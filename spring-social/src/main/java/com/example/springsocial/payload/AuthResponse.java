package com.example.springsocial.payload;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class AuthResponse {

    private String tokenType = "Bearer";

    private final String accessToken;
}
