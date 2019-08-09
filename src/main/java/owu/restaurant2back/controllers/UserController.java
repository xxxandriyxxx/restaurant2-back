package owu.restaurant2back.controllers;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import owu.restaurant2back.models.*;
import owu.restaurant2back.services.*;

import javax.servlet.http.HttpServletResponse;

//@CrossOrigin(origins = "*")
@RestController
public class UserController {

    @Autowired
    private UserService userService;


    @PostMapping("/save/client")
    public ResponseMessage saveClient(@RequestBody Client client) {
        return userService.save(client);
    }


    @PostMapping("/save/owner")
    public ResponseMessage saveOwner(@RequestBody Owner owner) {
        System.out.println("saveOwner mapping works");
        return userService.save(owner);
    }


    @PostMapping("/activation")
    public ResponseMessage activation(@RequestBody ResponseMessage responseMessage) {
        return userService.activation(responseMessage.getMessage());
    }


    @PostMapping("/login/try")
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
            response.addHeader("UserId", res.getHeader("UserId"));

            response.addHeader("LoginStatusCode", Integer.toString(res.getStatusCode()));
            return "SUCCESS: user has been logged !";
        } else {
            response.addHeader("LoginStatusCode", Integer.toString(res.getStatusCode()));
            return "ERROR: " + res.getStatusCode() + " " + res.getBody().asString();
        }
    }


    @GetMapping("/user/get/{id}")
    public User getUserById(@PathVariable int id) {
        return userService.findById(id);
    }


    @PostMapping("/user/update/{id}")
    public ResponseMessage updateUserById(@PathVariable int id,
                                          @RequestBody BasicData basicData) {
        return userService.update(id, basicData);
    }


}
