package com.example.demo1.Revenue;

import lombok.Data;

import java.math.BigDecimal;
import java.text.DecimalFormat;

@Data
public class Revenue {
    int year;
    BigDecimal revenue;
}
