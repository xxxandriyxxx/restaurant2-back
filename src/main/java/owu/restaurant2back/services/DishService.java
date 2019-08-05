package owu.restaurant2back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.DishDAO;

import owu.restaurant2back.models.*;

import java.util.List;

@Service
public class DishService {

    @Autowired
    DishDAO dishDAO;


    //     You should use only the unique names of dishes for the same restaurant.
    public ResponseMessage save(Dish dish) {
        if (dishDAO.existsByNameAndRestaurantId(dish.getName(),dish.getRestaurant().getId())){
            return new ResponseMessage("ERROR: You already have a dish with a such name in this restaurant");
        } else {
            dishDAO.save(dish);
            return new ResponseMessage("The dish has been added");
        }
    }

    public List<Dish> findByMenuSectionId(int id) {
        return dishDAO.findByMenuSectionId(id);
    }

    public List<Dish> findByRestaurantId(int id) {
        return dishDAO.findByRestaurantId(id);
    }

    public List<Dish> findAll() {
        return dishDAO.findAll();
    }


    public ResponseMessage change (Dish dish){
        Dish dishForChange = dishDAO.findById(dish.getId());
        List<Dish> dishes = dishDAO.findByRestaurantId(dishForChange.getRestaurant().getId());
        dishes.remove(dishForChange);
        for (Dish d : dishes){
            if(d.getName().equals(dish.getName())){
                return new ResponseMessage("ERROR: You already have a dish with a such name in this restaurant");
            }
        }
        dishForChange.setName(dish.getName());
        dishForChange.setDescription(dish.getDescription());
        dishForChange.setPrice(dish.getPrice());
        dishDAO.save(dishForChange);
        return new ResponseMessage("The dish has been updated");
    }

    public ResponseMessage deleteById(int id){
        dishDAO.deleteById(id);
        return new ResponseMessage("The dish has been deleted");
    }


}

