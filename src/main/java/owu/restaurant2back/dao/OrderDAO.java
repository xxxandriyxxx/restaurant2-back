package owu.restaurant2back.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.Order;

import java.util.List;

@Repository
public interface OrderDAO extends JpaRepository<Order, Integer> {

    Order findById(int id);

    List<Order> findByUserId(int id);

    List<Order> findByRestaurantId(int id);

}
