package com.example.demo1;

import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Data
@Service
public class UserService {
//    实体化
    @Autowired
    UserMapper userMapper;
    public List<User> findAll(){

        return userMapper.findAll();
    }
}
