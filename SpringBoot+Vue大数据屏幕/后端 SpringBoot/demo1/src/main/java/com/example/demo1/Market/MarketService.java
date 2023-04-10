package com.example.demo1.Market;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketService {
    @Autowired
    MarketMapper marketMapper;

    public List<Market> findAll(){
        return marketMapper.findAll();
    }
}
