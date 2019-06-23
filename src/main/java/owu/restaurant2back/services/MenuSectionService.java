package owu.restaurant2back.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.MenuSectionDAO;
import owu.restaurant2back.models.MenuSection;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.Restaurant;

import java.util.List;

@Service
public class MenuSectionService {

    @Autowired
    MenuSectionDAO menuSectionDAO;

    //     You should use only the unique names of the menu sections for the same restaurant.
    public ResponseMessage save(MenuSection menuSection) {
        if (menuSectionDAO.existsByNameAndRestaurantId(menuSection.getName(), menuSection.getRestaurant().getId())) {
            return new ResponseMessage("ERROR: You already have a menu section with such name in this restaurant");
        } else {
            menuSectionDAO.save(menuSection);
            return new ResponseMessage("SUCCESS: The menu section has been added");
        }
    }

    public MenuSection findById(int id) {
        return menuSectionDAO.findById(id);
    }

    public List<MenuSection> findByRestaurantId(int id) {
        return menuSectionDAO.findByRestaurantId(id);
    }

    //     You should use only the unique names of the menu sections for the same restaurant.
    public ResponseMessage change (MenuSection menuSection){
        MenuSection sectionForChange = menuSectionDAO.findById(menuSection.getId());
        List<MenuSection> sections = menuSectionDAO.findByRestaurantId(sectionForChange.getRestaurant().getId());
        sections.remove(sectionForChange);
        for (MenuSection s: sections){
            if(s.getName().equals(menuSection.getName())){
                return new ResponseMessage("ERROR: You already have a menu section with such name in this restaurant");
            }
        }
        sectionForChange.setName(menuSection.getName());
        menuSectionDAO.save(sectionForChange);
        return new ResponseMessage("SUCCESS: The menu section has been changed");
    }


    public ResponseMessage deleteById(int id){
//        MenuSection menuSection = menuSectionDAO.findById(id);
//        Restaurant restaurant = menuSection.getRestaurant();
//        List<MenuSection> menuSections = restaurant.getMenuSections();
//        menuSections.remove(menuSection);
//        restaurant.setMenuSections(menuSections);
//        menuSectionDAO.delete(menuSection);
        menuSectionDAO.deleteById(id);
        return new ResponseMessage("SUCCESS: The menu section has been deleted");
    }
}
