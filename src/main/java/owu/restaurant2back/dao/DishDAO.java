package owu.restaurant2back.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.Dish;

import java.util.List;

@Repository
public interface DishDAO extends JpaRepository<Dish, Integer> {

    List<Dish> findByMenuSectionId(int id);

    List<Dish> findByRestaurantId(int id);

    Dish findById(int id);

    boolean existsByNameAndRestaurantId(String name, int id);
}
