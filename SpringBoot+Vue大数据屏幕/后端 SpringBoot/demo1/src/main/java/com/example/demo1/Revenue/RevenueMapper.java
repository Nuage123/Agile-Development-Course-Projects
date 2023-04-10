package com.example.demo1.Revenue;

import com.example.demo1.Revenue.Revenue;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.BitSet;
import java.util.List;


@Mapper
@Repository
public interface RevenueMapper {
    List<Revenue> findAllRevenue();

//    @Select("SELECT revenue FROM mcdonalds_revenue")
    List<BigDecimal> findRevenue();
    List<Integer> findYear();

//    @Select("SELECT * FROM mcdonalds_revenue WHERE year = #{year}")
    List<Revenue> findbyYear(Integer year);
//    List<Revenue> findbyRevenue(@Param("Revenue") BigDecimal revenue);

    List<Revenue> selectByYear(@Param("year") Integer Year);
}
