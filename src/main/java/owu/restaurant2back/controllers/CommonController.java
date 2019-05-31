package owu.restaurant2back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import owu.restaurant2back.services.UserService;

@Controller
public class CommonController {

    @Autowired
    private UserService userService;


    @GetMapping("/")
    public String home(){
        System.out.println("asdasd");
        return "forward:/index.html";
    }





}
