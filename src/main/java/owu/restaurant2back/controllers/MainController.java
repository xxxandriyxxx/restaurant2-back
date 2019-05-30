package owu.restaurant2back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import owu.restaurant2back.models.Client;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.Restaurant;
import owu.restaurant2back.models.User;
import owu.restaurant2back.services.ClientService;
import owu.restaurant2back.services.RestaurantService;
import owu.restaurant2back.services.UserService;


@RestController

public class MainController {

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private ClientService clientService;

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

    @PostMapping("/saveRestaurant")
    public ResponseMessage saveRestaurant(@RequestBody Restaurant restaurant
    ) {
        restaurant.setPassword(passwordEncoder.encode(restaurant.getPassword()));
        return restaurantService.save(restaurant);
    }

    @PostMapping("/saveClient")
    public ResponseMessage saveClient(@RequestBody Client client
    ) {
        client.setPassword(passwordEncoder.encode(client.getPassword()));
        return clientService.save(client);
    }


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
