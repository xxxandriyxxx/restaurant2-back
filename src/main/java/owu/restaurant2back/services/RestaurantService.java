package owu.restaurant2back.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.Restaurant;
import owu.restaurant2back.models.User;

import java.util.List;

public interface RestaurantService extends UserDetailsService {

    ResponseMessage save(Restaurant restaurant);

    List<Restaurant> findAll();

    Restaurant findOneById(Integer id);
}
