package owu.restaurant2back.controllers;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@Controller
public class CommonController {


    @GetMapping("/")
    public String home() {
        return "forward:/index.html";
    }

    @GetMapping("/activation/{jwt}")
    public String activation(@PathVariable String jwt) {
        return "forward:/index.html";
    }

}
