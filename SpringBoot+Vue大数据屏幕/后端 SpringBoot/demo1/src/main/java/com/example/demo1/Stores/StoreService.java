package com.example.demo1.Stores;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
public class StoreService {
    @Autowired
    StoreMapper storeMapper;

    public List<Store> findAll(){
        return storeMapper.findAll();
    }
    public List<Integer> findNumber(){
        return storeMapper.findNumber();
    }
    public List<Integer> findYear(){
        return storeMapper.findYear();
    }
}
