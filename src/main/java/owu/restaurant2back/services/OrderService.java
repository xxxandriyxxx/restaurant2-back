package owu.restaurant2back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.OrderDAO;
import owu.restaurant2back.dao.RestaurantDAO;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.*;

import java.util.ArrayList;
import java.util.List;

@Service
public class OrderService {

    @Autowired
    OrderDAO orderDAO;

    @Autowired
    UserDAO userDAO;

    @Autowired
    RestaurantDAO restaurantDAO;

    @Autowired
    StatisticsService statisticsService;


    public ResponseMessage placeOrder(Order order, int userId, int restaurantId) {
        order.setUser(userDAO.findById(userId));
        order.setUsername(userDAO.findById(userId).getUsername());
        order.setRestaurant(restaurantDAO.findById(restaurantId));
        orderDAO.save(order);
        return new ResponseMessage("The order was sent for processing");
    }

    public List<Order> findByUserId(int id) {
        return orderDAO.findByUserId(id);
    }

    public ResponseMessage changeStatus(Order order) {
        Order orderForUpdate = orderDAO.findById(order.getId());
        orderForUpdate.setStatus(order.getStatus());
        orderDAO.save(orderForUpdate);

        if (orderForUpdate.getStatus().equals(OrderStatus.PAID)) {
            statisticsService.changeStatistics(orderForUpdate);
        }

        return new ResponseMessage("The status of the order has been updated");
    }

    public List<Order> findByOwnerId(int id) {
        List<Order> orders = new ArrayList<>();
        List<Restaurant> myRestaurants = restaurantDAO.findByOwnerId(id);
        for (Restaurant rest : myRestaurants) {
            orders.addAll(orderDAO.findByRestaurantId(rest.getId()));
        }
        return orders;
    }

    public List<Order> findByRestaurantId(int id) {
        return orderDAO.findByRestaurantId(id);
    }

}
