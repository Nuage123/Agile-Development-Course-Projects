package com.example.demo1.Revenue;

import com.example.demo1.Revenue.Revenue;
import com.example.demo1.Revenue.RevenueMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class RevenueService {
    @Autowired
    RevenueMapper revenueMapper;

    public List<Revenue> findAllRevenue(){
        return revenueMapper.findAllRevenue();
    }
    public List<BigDecimal> findRevenue(){
        return revenueMapper.findRevenue();
    }
    public List<Integer> findYear(){
        return revenueMapper.findYear();
    }
//    public List<Revenue> findbyYear(Integer year){
//        return revenueMapper.findbyYear(year);
//    }
////    public List<Revenue> findbyRevenue(BigDecimal revenue){
////        return revenueMapper.findbyRevenue(revenue);
////    }
public List<Revenue> selectByYear(Integer year) {
    return revenueMapper.selectByYear(year);
}
}
