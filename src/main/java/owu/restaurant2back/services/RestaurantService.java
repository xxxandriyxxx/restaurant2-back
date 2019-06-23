package owu.restaurant2back.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.RestaurantDAO;
import owu.restaurant2back.models.BasicData;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.Restaurant;
import owu.restaurant2back.models.User;

import java.util.ArrayList;
import java.util.List;

@Service
public class RestaurantService {

    @Autowired
    private RestaurantDAO restaurantDAO;


    //     The same owner can add restaurants with the same names, but their addresses must be different
    //     (for example, a restaurant chain).
    //     Different owners can't have restaurants with the same names at the same address.
    public ResponseMessage save(Restaurant restaurant) {
        int ownerId = restaurant.getOwner().getId();
        String name = restaurant.getName();
        String address = restaurant.getAddress();

        if (restaurantDAO.existsByNameAndAddressAndOwnerId(name, address, ownerId)) {
            return new ResponseMessage("ERROR: You already have a restaurant with such name at this address");
        } else if (restaurantDAO.existsByNameAndAddress(name, address)) {
            return new ResponseMessage("ERROR: Another owner has already registered a restaurant with such" +
                    " name at this address");
        } else {
            restaurantDAO.save(restaurant);
            return new ResponseMessage("SUCCESS: The restaurant has been added");
        }
    }

    public Restaurant findById(int id) {
        return restaurantDAO.findById(id);
    }

    public List<Restaurant> findByOwnerId(int id) {
        return restaurantDAO.findByOwnerId(id);
    }

    public ResponseMessage deleteById(int id) {
        restaurantDAO.deleteById(id);
        return new ResponseMessage("SUCCESS: The restaurant has been deleted");
    }


    public ResponseMessage change(Restaurant rest) {
        Restaurant restForUpdate = restaurantDAO.findById(rest.getId());
        String newName = rest.getName();
        String newAddress = rest.getAddress();
        int ownerId = restForUpdate.getOwner().getId();
        List<Restaurant> myRestaurants = restaurantDAO.findByOwnerId(ownerId);
        List<Restaurant> allRestaurants = restaurantDAO.findAll();

        myRestaurants.remove(restForUpdate);
        allRestaurants.remove(restForUpdate);

        for (Restaurant r : myRestaurants) {
            if (r.getName().equals(newName) && r.getAddress().equals(newAddress)) {
                return new ResponseMessage("ERROR: You already have a restaurant with such name at this address");
            }
        }
        for (Restaurant r : allRestaurants) {
            if (r.getName().equals(newName) && r.getAddress().equals(newAddress)) {
                return new ResponseMessage("ERROR: Another owner has already registered a restaurant with such name " +
                        "at this address");
            }
        }

        restForUpdate.setName(newName);
        restForUpdate.setAddress(newAddress);
        restForUpdate.setAbout(rest.getAbout());
        restForUpdate.setPhoneNumber(rest.getPhoneNumber());
        restaurantDAO.save(restForUpdate);
        return new ResponseMessage("SUCCESS: The restaurant has been changed");
    }


}
