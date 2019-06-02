package owu.restaurant2back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import owu.restaurant2back.models.*;
import owu.restaurant2back.services.UserService;


@RestController

public class MainController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;


//    @GetMapping("/")
//    public String home(){
//        return "home";
//    }

    @PostMapping("/saveUser")
    public ResponseMessage saveUser(@RequestBody User user
//            @RequestParam("username") String username,
//                @RequestParam ("password")String password
    ) {
//        user.setPassword(passwordEncoder.encode(user.getPassword()));

//        System.out.println("username = " + username);
//        System.out.println("password = " + password);
//
//        User user = new User();
//        user.setUsername(username);
//        user.setPassword(password);


        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userService.save(user);
//        return user.toString();
    }

    @PostMapping("/saveOwner")
    public ResponseMessage saveOwner(@RequestBody Owner owner
    ) {
        owner.setPassword(passwordEncoder.encode(owner.getPassword()));
        return userService.save(owner);
    }

    @PostMapping("/saveClient")
    public ResponseMessage saveClient(@RequestBody Client client
    ) {
        client.setPassword(passwordEncoder.encode(client.getPassword()));
        return userService.save(client);
    }

    @PostMapping("/activation")
    public ResponseMessage activation(@RequestBody ResponseMessage responseMessage
    ) {
        return userService.activation(responseMessage.getMessage());
    }

//    @GetMapping("/activation/{jwt}")
//    public String  activation(@PathVariable String jwt){
//        System.out.println(jwt);
//        userService.activation(jwt);
//
//        return "activation kkkkk";
//    }


    @GetMapping("/get")
    public String get() {
        return "get it";
    }

    @GetMapping("/admin")
    public String admin() {
        return "hello admin !!!";
    }

//    @Autowired
//    private UserService userService;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @PostMapping("/saveUser")
//    public String saveUser(User user){
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        userService.save(user);
//        return "redirect:/login";
//    }
}
