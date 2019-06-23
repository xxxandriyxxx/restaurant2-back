package owu.restaurant2back.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.Dish;
import owu.restaurant2back.models.Restaurant;

import java.util.List;


@Repository
public interface RestaurantDAO extends JpaRepository<Restaurant, Integer> {


    Restaurant findById(int id);

    List<Restaurant> findByOwnerId(int id);


    boolean existsByNameAndOwnerId(String name, int id);

    boolean existsByNameAndAddressAndOwnerId( String name, String address, int id);

    boolean existsByNameAndAddress(String name, String address);
}
