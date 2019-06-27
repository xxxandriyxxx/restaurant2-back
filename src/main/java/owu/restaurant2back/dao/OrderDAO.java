package owu.restaurant2back.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.Order;

@Repository
public interface OrderDAO extends JpaRepository<Order, Integer> {

    Order findById (int id);

}
