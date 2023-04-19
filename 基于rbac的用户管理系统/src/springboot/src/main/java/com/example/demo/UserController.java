package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;



@RestController
@RequestMapping("/admin-api/user/")
public class UserController {


    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;



    public User getUserbyAuthHeader(String authHeader){
        // 解析Authorization请求头中的JWT令牌 Bearer access_token
        String token = authHeader.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);

        User foundUser = userMapper.findByUsername(username);
        return foundUser;
    }
    @GetMapping("/profile/get")
    public CommonResult<?> getUserProfile(@RequestHeader("Authorization") String authHeader) {
//        System.out.println("getinfo");
        String token = authHeader.substring(7);
        String username = jwtTokenUtil.getUsernameFromToken(token);

        User foundUser = userMapper.findByUsername(username);
//        User foundUser=getUserbyAuthHeader(authHeader);

        CommonResult<User> result = CommonResult.success(foundUser);
//        System.out.println(foundUser.getIdCard());
        return result;
    }
@PostMapping("/profile/changeInfo")
    public CommonResult<?> changePassword(@RequestHeader("Authorization") String authHeader,@RequestBody User updatedUser){
    String token = authHeader.substring(7);
    String username = jwtTokenUtil.getUsernameFromToken(token);

    User foundUser = userMapper.findByUsername(username);
    CommonResult<User> result;
    if(!updatedUser.getUsername().equals(foundUser.getUsername()))
        return CommonResult.error(50007,"Forbidden");

    userMapper.changeInfo(updatedUser);
    System.out.println("资料修改成功");
    return CommonResult.success("Updated Successfully");

}
//    @PostMapping("/profile/changeinfo")
//    public CommonResult<?> changeInfo(@RequestHeader("Authorization") String authHeader,@RequestBody User user) {
//
//        CommonResult<User> result;
////        logger.info(user.getUsername());
//        String token = authHeader.substring(7);
//        String username = jwtTokenUtil.getUsernameFromToken(token);
////        logger.info(username);
//        User foundUser = userMapper.findByUsername(username);
//        if (username.equals(user.getUsername())){
////            logger.info(username);
//            userMapper.changeInfo(user);
////            logger.info("new "+user.getName());
//            result = CommonResult.success(foundUser);
////            System.out.println("成功");
//        }else {
//            result=CommonResult.error(50007,"不能修改他人信息");
//        }
//        return result;
//    }
//
}