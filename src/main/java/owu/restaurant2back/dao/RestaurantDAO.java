package owu.restaurant2back.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.Restaurant;

@Repository
public interface RestaurantDAO extends JpaRepository<Restaurant,Integer> {
    Restaurant findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
