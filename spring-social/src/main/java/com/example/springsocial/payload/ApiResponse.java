package com.example.springsocial.payload;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@RequiredArgsConstructor
public class ApiResponse {

    private final boolean success;
    private final String message;
}
