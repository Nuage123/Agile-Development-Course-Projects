package com.example.demo1.Market;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.PrivateKey;
import java.util.List;

@RestController
@RequestMapping("market")
@CrossOrigin
public class MarketController {
    @Autowired
    MarketService marketService;

    @GetMapping("")
    public List<Market> findAll(){
        return marketService.findAll();
    }
}
