package com.example.demo;


import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin-api/auth/")

@CrossOrigin
public class AuthController {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;

    @PostMapping("/register")
    public CommonResult<?> register(@RequestBody RegisterRequest reg_user) {

        User foundUser = userMapper.findByUsername(reg_user.getIdCard());

        //用户存在返回错误
        if (foundUser != null) {
            System.out.println("用户存在");
            return CommonResult.error(50003,"用户已存在");
//            System.out.println("用户存在");
        }

        User new_user = new User(reg_user.getIdCard(),reg_user.getPassword()
                ,reg_user.getName(),reg_user.getIdCard(),reg_user.getPhone()
                ,reg_user.getEmail());
        try {
            // 将用户信息保存到数据库
            userMapper.insert(new_user);
            System.out.println("注册成功");
        } catch (Exception e) {
            // 处理插入失败的情况
            System.out.println("注册失败");
            System.out.println(e.toString());
            return CommonResult.error(50003,"User registration failed");
        }
        return CommonResult.success("User registered successfully");
    }

    @PostMapping("/login")
    public CommonResult<?> login(@RequestBody LoginRequest loginUser) {
        System.out.println("登录");
        User user = userMapper.findByUsername(loginUser.getUsername());
        //登录检测用户是否存在
        if (user == null) {

            return CommonResult.error(50007,"用户不存在");
        }
//账户密码是否对应
        if (!loginUser.getPassword().equals(user.getPassword())) {

            return CommonResult.error(50007,"登录失败，账号密码不正确");
        }

        String username = loginUser.getUsername();

        // 生成访问令牌和刷新令牌
        String accessToken = jwtTokenUtil.generateAccessToken(username);
        String refreshToken = jwtTokenUtil.generateRefreshToken(username);
        TokenResponse token_resp = new TokenResponse(accessToken,refreshToken);

        CommonResult<TokenResponse> result = CommonResult.success(token_resp);

        return result;
    }
}