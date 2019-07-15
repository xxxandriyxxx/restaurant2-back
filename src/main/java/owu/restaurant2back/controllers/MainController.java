package owu.restaurant2back.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import jdk.nashorn.internal.parser.JSONParser;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.http.RequestEntity;
import org.springframework.http.StreamingHttpOutputMessage;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import owu.restaurant2back.models.*;
import owu.restaurant2back.services.*;
import sun.rmi.runtime.Log;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;


@RestController

public class MainController {

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private MenuSectionService menuSectionService;

    @Autowired
    private DishService dishService;

    @Autowired
    private OrderService orderService;

    private String username;
    private String password;

//    HttpClient httpclient = HttpClient.createDefault();
//    HttpPost httppost = new HttpPost("http://www.a-domain.com/foo/");

//    @GetMapping("/")
//    public String home(){
//        return "home";
//    }

//    @PostMapping("/saveUser")
//    public ResponseMessage saveUser(@RequestBody User user
////            @RequestParam("username") String username,
////                @RequestParam ("password")String password
//    ) {
////        user.setPassword(passwordEncoder.encode(user.getPassword()));
//
////        System.out.println("username = " + username);
////        System.out.println("password = " + password);
////
////        User user = new User();
////        user.setUsername(username);
////        user.setPassword(password);
//
//
////        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return userService.save(user);
////        return user.toString();
//    }

    @PostMapping("/saveClient")
    public ResponseMessage saveClient(@RequestBody Client client) {
//        client.setPassword(passwordEncoder.encode(client.getPassword()));
        return userService.save(client);
    }

    @PostMapping("/saveOwner")
    public ResponseMessage saveOwner(@RequestBody Owner owner) {
//        owner.setPassword(passwordEncoder.encode(owner.getPassword()));
        return userService.save(owner);
    }

    @PostMapping("/activation")
    public ResponseMessage activation(@RequestBody ResponseMessage responseMessage) {
        return userService.activation(responseMessage.getMessage());
    }

    @PostMapping("/tryLogin")
    public String tryLogin(@RequestBody BasicData basicData,
                           HttpServletResponse response) {
        System.out.println(basicData);
        if (!basicData.getEmail().isEmpty()) {
            if (userService.existsByEmail(basicData.getEmail())) {
                basicData.setUsername(userService.findUserByEmail(basicData.getEmail()).getUsername());
            } else {
                basicData.setUsername(null);
            }
        }
        System.out.println(basicData);
        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", "application/json");
        request.body(basicData);
        Response res = request.post("/login");
        System.out.println("res Headers: " + res.getHeaders().toString());
        System.out.println("res Body: " + res.getBody().asString());
        if (res.getStatusCode() >= 200 && res.getStatusCode() < 400) {
            response.addHeader("Authorization", res.getHeader("Authorization"));
            response.addHeader("UserClass", res.getHeader("UserClass"));
//            response.addHeader("UserLogged", res.getHeader("UserLogged"));
            response.addHeader("UserId", res.getHeader("UserId"));

            response.addHeader("LoginStatusCode", Integer.toString(res.getStatusCode()));
            return "SUCCESS: user has been logged !";
        } else {
            response.addHeader("LoginStatusCode", Integer.toString(res.getStatusCode()));
            return "ERROR: " + res.getStatusCode() + " " + res.getBody().asString();
        }
    }

    //    @CrossOrigin(origins = "*")
    @GetMapping("/getUserById/{id}")
    public User activation(@PathVariable int id) {
        return userService.findById(id);
    }


    @PostMapping("/updateProfile/{id}")
    public ResponseMessage updateProfile(@PathVariable int id,
                                         @RequestBody BasicData basicData) {
        return userService.updateProfile(id, basicData);
    }


//    @PostMapping("/addRestaurant/{ownerId}")
//    public ResponseMessage addRestaurant(@PathVariable int ownerId,
//                                         @RequestBody Restaurant restaurant) {
//        restaurant.setOwner((Owner) userService.findById(ownerId));
//        return restaurantService.save(restaurant);
//    }

    @PostMapping("/addRestaurant/{ownerId}")
    public ResponseMessage addRestaurant(@PathVariable int ownerId,
                                         @RequestParam("restaurant") String restaurant,
                                         @RequestParam("logo") MultipartFile logo) throws IOException {
        return restaurantService.save(ownerId, restaurant, logo);
    }

    // change including logo
//    @PostMapping("/changeRestaurant")
//    public ResponseMessage changeRestaurant(@RequestParam("restaurant") String restaurant,
//                                            @RequestParam("logo") MultipartFile logo) throws IOException {
//        return restaurantService.change(restaurant, logo);
//    }

    // change except logo
    @PostMapping("/changeRestaurant")
    public ResponseMessage changeRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.change(restaurant);
    }

    @PostMapping("/changeLogo/{restId}")
    public ResponseMessage changeLogo(@PathVariable int restId,
                                    @RequestParam("logo") MultipartFile logo) {
        int ownerId = restaurantService.findById(restId).getOwner().getId();
        return new ResponseMessage(restaurantService.saveLogo(ownerId, restId, logo));
    }

    @GetMapping("/getRestaurants/{ownerId}")
    public List<Restaurant> getRestaurants(@PathVariable int ownerId) {
        return restaurantService.findByOwnerId(ownerId);
    }

    @GetMapping("/getAllRestaurants")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.findAll();
    }

    @DeleteMapping("/deleteRestaurant/{id}")
    public ResponseMessage deleteRestaurant(@PathVariable int id) {
        return restaurantService.deleteById(id);
    }


    @PostMapping("/addMenuSection/{restaurantId}")
    public ResponseMessage addMenuSection(@PathVariable int restaurantId,
                                          @RequestBody MenuSection menuSection) {
        menuSection.setRestaurant(restaurantService.findById(restaurantId));
        return menuSectionService.save(menuSection);
    }

    @GetMapping("/getMenuSections/{restaurantId}")
    public List<MenuSection> getMenuSections(@PathVariable int restaurantId) {
        return menuSectionService.findByRestaurantId(restaurantId);
    }

    @PostMapping("/changeMenuSection")
    public ResponseMessage changeMenuSection(@RequestBody MenuSection menuSection) {
        return menuSectionService.change(menuSection);
    }

    @DeleteMapping("deleteMenuSection/{id}")
    public ResponseMessage deleteMenuSectionById(@PathVariable int id) {
        return menuSectionService.deleteById(id);
    }


    @PostMapping("/addDish/{restaurantId}/{sectionId}")
    public ResponseMessage addDish(@PathVariable int restaurantId,
                                   @PathVariable int sectionId,
                                   @RequestBody Dish dish) {
        dish.setMenuSection(menuSectionService.findById(sectionId));
        dish.setRestaurant(restaurantService.findById(restaurantId));
        return dishService.save(dish);
    }

//    @PostMapping("/addDish/{restaurantId}/{sectionId}")
//    public ResponseMessage addDish(@PathVariable int restaurantId,
//                                   @PathVariable int sectionId,
//                                   @RequestBody Dish newDish) {
//        System.out.println("dish = " + newDish);
//        return dishService.save(restaurantId, sectionId, newDish);
//    }


    @GetMapping("/getDishesBySectionId/{id}")
    public List<Dish> getDishesBySectionId(@PathVariable int id) {
        return dishService.findByMenuSectionId(id);
    }


    @GetMapping("/getDishesByRestaurantId/{id}")
    public List<Dish> getDishesByRestaurantId(@PathVariable int id) {
        return dishService.findByRestaurantId(id);
    }


    @GetMapping("/getAllDishes")
    public List<Dish> getAllDishes() {
        return dishService.findAll();
    }


    @PostMapping("/changeDish")
    public ResponseMessage changeDish(@RequestBody Dish dish) {
        return dishService.change(dish);
    }

    @DeleteMapping("deleteDish/{id}")
    public ResponseMessage deleteDishById(@PathVariable int id) {
        return dishService.deleteById(id);
    }


    @PostMapping("/makeOrder/{userId}/{restaurantId}")
    public ResponseMessage makeOrder(@PathVariable int userId,
                                     @PathVariable int restaurantId,
                                     @RequestBody Order order) {
        System.out.println(order);
        return orderService.makeOrder(order, userId, restaurantId);
    }


    @GetMapping("/getMyOrders/{id}")
    public List<Order> getMyOrders(@PathVariable int id) {
        return orderService.findByUserId(id);
    }

    @GetMapping("/getOrdersByOwnerId/{id}")
    public List<Order> getOrdersByOwnerId(@PathVariable int id) {
        return orderService.findByOwnerId(id);
    }

    @PostMapping("/changeOrderStatus")
    public ResponseMessage changeOrderStatus(@RequestBody Order order) {
        return orderService.changeStatus(order);
//        return new ResponseMessage("kuku");
    }


//    @PostMapping("/loginme")
////    @ResponseBody
//    public void loginMe(@RequestParam String loginEmail,
//                        @RequestParam String password,
//                        @RequestParam String byLogin,
//                        @RequestParam String byEmail) {
//
//        System.out.println("loginEmail = " + loginEmail);
//        System.out.println("password = " + password);
//        System.out.println("byLogin = " + byLogin);
//        System.out.println("byEmail = " + byEmail);
//
//
//        if (byEmail == "true") {
//            username = userService.findUserByEmail(loginEmail).getUsername();
//        } else {
//            username = loginEmail;
//        }
//
//        JSONObject requestBody = new JSONObject();
//        requestBody.put("username", username);
//        requestBody.put("password", password);
//
//        RequestSpecification request = RestAssured.given();
//        request.header("Content-Type", "application/json");
//        request.body(requestBody.toString());
//        Response response = request.post("/login");
//
////        int statusCode = response.getStatusCode();
////        Assert.assertEquals(statusCode, 201);
////        String successCode = response.jsonPath().get("SuccessCode");
////        Assert.assertEquals(successCode, "OPERATION_SUCCESS");
//        System.out.println(response.getBody().asString());
//
//    }


//
//    @PostMapping("/loginme")
////    @ResponseBody
//    public void loginMe(@RequestParam String loginEmail,
//                        @RequestParam String password,
//                        @RequestParam String byLogin,
//                        @RequestParam String byEmail) {
//
//        System.out.println("loginEmail = " + loginEmail);
//        System.out.println("password = " + password);
//        System.out.println("byLogin = " + byLogin);
//        System.out.println("byEmail = " + byEmail);
//
//
//        if (byEmail == "true") {
//            username = userService.findUserByEmail(loginEmail).getUsername();
//        } else {
//            username = loginEmail;
//        }
//
//        JSONObject requestBody = new JSONObject();
//        requestBody.put("username", username);
//        requestBody.put("password", password);
//
//        RequestSpecification request = RestAssured.given();
//        request.header("Content-Type", "application/json");
//        request.body(requestBody.toString());
//        Response response = request.post("/login");
//
////        int statusCode = response.getStatusCode();
////        Assert.assertEquals(statusCode, 201);
////        String successCode = response.jsonPath().get("SuccessCode");
////        Assert.assertEquals(successCode, "OPERATION_SUCCESS");
//        System.out.println(response.getBody().asString());
//
//    }


}
