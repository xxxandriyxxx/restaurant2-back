package owu.restaurant2back.controllers;


import com.fasterxml.jackson.databind.ObjectMapper;
import io.jsonwebtoken.lang.Assert;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import owu.restaurant2back.models.*;
import owu.restaurant2back.services.UserService;

import javax.mail.MessagingException;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;


@RestController

public class MainController {

//    @Autowired
//    private PasswordEncoder passwordEncoder;

    @Autowired
    private UserService userService;

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
    public String tryLogin(@RequestBody LoginData loginData,
                           HttpServletResponse response) {
        System.out.println(loginData);
        if (!loginData.getEmail().isEmpty()) {
            System.out.println("is empty");

            /////////// дописати

        }
        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", "application/json");
        request.body(loginData);
        Response res = request.post("/login");
        System.out.println(res.getHeaders().toString());
        System.out.println(res.getBody());
        if (res.getStatusCode() >= 200 && res.getStatusCode() < 400) {
            response.addHeader("Authorization", res.getHeader("Authorization"));
            response.addHeader("UserClass", res.getHeader("UserClass"));
            response.addHeader("UserLogged", res.getHeader("UserLogged"));
            response.addHeader("LoginStatusCode",Integer.toString(res.getStatusCode()));
            return "SUCCESS: user has been logged !";
        } else {
            response.addHeader("LoginStatusCode",Integer.toString(res.getStatusCode()));
            return "ERROR: " + res.getStatusCode() + " " + res.getBody().asString();
        }

    }


    @PostMapping("/loginme")
//    @ResponseBody
    public void loginMe(@RequestParam String loginEmail,
                        @RequestParam String password,
                        @RequestParam String byLogin,
                        @RequestParam String byEmail) {

        System.out.println("loginEmail = " + loginEmail);
        System.out.println("password = " + password);
        System.out.println("byLogin = " + byLogin);
        System.out.println("byEmail = " + byEmail);


        if (byEmail == "true") {
            username = userService.findUserByEmail(loginEmail).getUsername();
        } else {
            username = loginEmail;
        }

        JSONObject requestBody = new JSONObject();
        requestBody.put("username", username);
        requestBody.put("password", password);

        RequestSpecification request = RestAssured.given();
        request.header("Content-Type", "application/json");
        request.body(requestBody.toString());
        Response response = request.post("/login");

//        int statusCode = response.getStatusCode();
//        Assert.assertEquals(statusCode, 201);
//        String successCode = response.jsonPath().get("SuccessCode");
//        Assert.assertEquals(successCode, "OPERATION_SUCCESS");
        System.out.println(response.getBody().asString());

    }


//
//    @CrossOrigin(origins = "*")
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

    @PostMapping("/some")

    public void some(
//            @RequestBody Model model
            @RequestParam String login,
            @RequestParam String password
    ) {
//        System.out.println(model.toString());

        System.out.println("login = " + login);
        System.out.println("password = " + password);


    }

//    @PostMapping("/findNameByEmail")
//    public ResponseMessage findUserByEmail(@RequestBody ResponseMessage responseMessage
//    ) {
//        return userService.findNameByEmail(responseMessage.getMessage());
////        return userService.findUserByEmail(email);
//    }


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

    @PostMapping("/admin")
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
