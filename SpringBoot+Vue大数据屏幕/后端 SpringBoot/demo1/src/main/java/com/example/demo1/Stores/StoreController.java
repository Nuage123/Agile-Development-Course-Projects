package com.example.demo1.Stores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.math.BigDecimal;
import java.util.List;

@RestController
@RequestMapping("stores")
@CrossOrigin
public class StoreController {
    @Autowired
    StoreService storeService;

    @GetMapping("")
    public List<Store> findAll(){
        return storeService.findAll();
    }
    @GetMapping("number")
    public List<Integer> findRevenue(){
        return storeService.findNumber();
    }
    @GetMapping("year")
    public List<Integer> findYear(){
        return storeService.findYear();
    }


}
