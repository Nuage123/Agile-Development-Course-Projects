package com.example.demo1.Stores;

import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StoreMapper {
    List<Store> findAll();

    List<Integer> findNumber();
    List<Integer> findYear();
}
