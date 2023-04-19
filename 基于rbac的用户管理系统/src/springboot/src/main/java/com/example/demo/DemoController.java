package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    private final Logger logger;

    public DemoController() {
        logger = LoggerFactory.getLogger(getClass());
    }

    @GetMapping("/")
    public CommonResult<?> Hello(){
        System.out.println("This is a system.out message.");
        logger.info("This is an info log message.");
        return CommonResult.success("Hello World");
    }
}