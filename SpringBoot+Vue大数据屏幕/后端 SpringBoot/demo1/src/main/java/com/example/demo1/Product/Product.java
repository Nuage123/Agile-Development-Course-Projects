package com.example.demo1.Product;

import lombok.Data;

import java.math.BigDecimal;

@Data
public class Product {
    private String name;
    private Integer calories;
    private BigDecimal price;
}
