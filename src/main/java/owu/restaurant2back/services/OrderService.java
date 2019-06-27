package owu.restaurant2back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.OrderDAO;
import owu.restaurant2back.dao.RestaurantDAO;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.Order;
import owu.restaurant2back.models.OrderStatus;
import owu.restaurant2back.models.ResponseMessage;

@Service
public class OrderService {

    @Autowired
    OrderDAO orderDAO;

    @Autowired
    UserDAO userDAO;

    @Autowired
    RestaurantDAO restaurantDAO;

    public ResponseMessage makeOrder(Order order, int userId, int restaurantId) {
        order.setUser(userDAO.findById(userId));
        order.setRestaurant(restaurantDAO.findById(restaurantId));
        order.setOrderStatus(OrderStatus.ORDSTAT_ORDERED);
        System.out.println(order);

        orderDAO.save(order);
        return new ResponseMessage("SUCCESS: an order has been made");
    }

}
