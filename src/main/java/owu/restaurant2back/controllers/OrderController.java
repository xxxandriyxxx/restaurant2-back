package owu.restaurant2back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import owu.restaurant2back.models.Order;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.services.OrderService;

import java.util.List;

@RestController
public class OrderController {

    @Autowired
    private OrderService orderService;


    @PostMapping("/order/place/{userId}/{restaurantId}")
    public ResponseMessage placeOrder(@PathVariable int userId,
                                     @PathVariable int restaurantId,
                                     @RequestBody Order order) {
        System.out.println(order);
        return orderService.placeOrder(order, userId, restaurantId);
    }


    @GetMapping("/orders/get/my/{id}")
    public List<Order> getMyOrders(@PathVariable int id) {
        return orderService.findByUserId(id);
    }


    @GetMapping("/orders/get/clients/{ownerId}")
    public List<Order> getOrdersByOwnerId(@PathVariable int ownerId) {
        return orderService.findByOwnerId(ownerId);
    }


    @PostMapping("/order/change-status")
    public ResponseMessage changeOrderStatus(@RequestBody Order order) {
        return orderService.changeStatus(order);
    }

}
