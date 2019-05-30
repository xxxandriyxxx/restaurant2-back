package owu.restaurant2back.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.RestaurantDAO;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.Restaurant;
import owu.restaurant2back.services.RestaurantService;

import java.util.List;

@Service
public class RestaurantServiceImpl implements RestaurantService {

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private RestaurantDAO restaurantDAO;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseMessage save(Restaurant restaurant) {
        if (restaurant == null) {
            return new ResponseMessage("ERROR: Restaurant == null !");
        } else if (userDAO.existsByUsername(restaurant.getUsername())) {
            return new ResponseMessage("ERROR: User with such login already exists !");
        } else if (userDAO.existsByEmail(restaurant.getEmail())) {
            return new ResponseMessage("ERROR: User with such email already exists ! !");
        } else {
            restaurant.setPassword(passwordEncoder.encode(restaurant.getPassword()));
            restaurantDAO.save(restaurant);
            return new ResponseMessage("SUCCESS: Restaurant has been saved !");
        }
    }

    @Override
    public List<Restaurant> findAll() {
        return null;
    }

    @Override
    public Restaurant findOneById(Integer id) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }
}
