package com.example.demo1.Market;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MarketMapper {
     List<Market> findAll();
}
