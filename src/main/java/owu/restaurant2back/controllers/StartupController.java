package owu.restaurant2back.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class StartupController {

    @GetMapping("/")
    public String home(){
        System.out.println("asdasd");
        return "forward:/index.html";
    }
}
