package com.example.demo;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

@Mapper
@Repository
public interface UserMapper {
    User findByUsername(String username);
//    void changeInfo(User user);
    void insert(User user);

//    void changePassword(User foundUser,String newPassword);

    void changeInfo(User user);
}