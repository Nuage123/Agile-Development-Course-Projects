package com.example.demo1.Revenue;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.math.BigDecimal;
import java.util.List;

@RestController()
@RequestMapping("revenue")
@CrossOrigin
public class RevenueController {
    @Autowired
    RevenueService revenueService;

    @GetMapping("findall")
    public List<Revenue> findAll() {
       return revenueService.findAllRevenue();
    }

    @GetMapping("AllRevenue")
    public List<BigDecimal> findRevenue(){
        return revenueService.findRevenue();
    }
    @GetMapping("AllYear")
    public List<Integer> findYear(){
        return revenueService.findYear();
    }

    @GetMapping("/year")
    public List<Revenue> selectByYear(@RequestParam("year") Integer year) {
        return revenueService.selectByYear(year);
    }}

