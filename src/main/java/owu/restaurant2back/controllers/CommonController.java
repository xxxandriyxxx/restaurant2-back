package owu.restaurant2back.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class CommonController {

    @GetMapping("/")
    public String home (){
        System.out.println("home works");
        return "forward:/index.html";
    }

}
