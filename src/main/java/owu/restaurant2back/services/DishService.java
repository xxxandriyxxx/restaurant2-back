package owu.restaurant2back.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.DishDAO;
import owu.restaurant2back.models.Dish;
import owu.restaurant2back.models.MenuSection;
import owu.restaurant2back.models.ResponseMessage;

import java.util.List;

@Service
public class DishService {

    @Autowired
    DishDAO dishDAO;

    //     You can use only the unique names of dishes for one restaurant.
    public ResponseMessage save(Dish dish) {
        if (dishDAO.existsByNameAndRestaurantId(dish.getName(),dish.getRestaurant().getId())){
            return new ResponseMessage("ERROR: You already have a dish with such name in this restaurant");
        } else {
            dishDAO.save(dish);
            return new ResponseMessage("SUCCESS: The dish has been added");
        }
    }

    public List<Dish> findByMenuSectionId(int id) {
        return dishDAO.findByMenuSectionId(id);
    }

    public List<Dish> findByRestaurantId(int id){
        return dishDAO.findByRestaurantId(id);
    }

    public List<Dish> findAll(){
        return dishDAO.findAll();
    }
}
