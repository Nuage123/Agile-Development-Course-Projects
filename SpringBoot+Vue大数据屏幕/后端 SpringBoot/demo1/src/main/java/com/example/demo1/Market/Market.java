package com.example.demo1.Market;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Market {
    @JsonProperty("name")
    String name;
    @JsonProperty("value")
    Float percentage;}
