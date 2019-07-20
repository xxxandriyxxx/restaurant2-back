package owu.restaurant2back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import owu.restaurant2back.models.Dish;
import owu.restaurant2back.models.MenuSection;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.Restaurant;
import owu.restaurant2back.services.DishService;
import owu.restaurant2back.services.MenuSectionService;
import owu.restaurant2back.services.RestaurantService;

import java.io.IOException;
import java.util.List;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantService restaurantService;

    @Autowired
    private MenuSectionService menuSectionService;

    @Autowired
    private DishService dishService;


    @PostMapping("/restaurant/add/{ownerId}")
    public ResponseMessage addRestaurant(@PathVariable int ownerId,
                                         @RequestParam("restaurant") String restaurant,
                                         @RequestParam("logo") MultipartFile logo) throws IOException {
        return restaurantService.save(ownerId, restaurant, logo);
    }

    // change including logo
//    @PostMapping("/changeRestaurant")
//    public ResponseMessage changeRestaurant(@RequestParam("restaurant") String restaurant,
//                                            @RequestParam("logo") MultipartFile logo) throws IOException {
//        return restaurantService.change(restaurant, logo);
//    }

    //    @PostMapping("/addRestaurant/{ownerId}")
//    public ResponseMessage addRestaurant(@PathVariable int ownerId,
//                                         @RequestBody Restaurant restaurant) {
//        restaurant.setOwner((Owner) userService.findById(ownerId));
//        return restaurantService.save(restaurant);
//    }

    // change except logo
    @PostMapping("/restaurant/change")
    public ResponseMessage changeRestaurant(@RequestBody Restaurant restaurant) {
        return restaurantService.change(restaurant);
    }


    @PostMapping("/restaurant/change/logo/{id}")
    public ResponseMessage changeLogo(@PathVariable int id,
                                      @RequestParam("logo") MultipartFile logo) {
        int ownerId = restaurantService.findById(id).getOwner().getId();
        return new ResponseMessage(restaurantService.saveLogo(ownerId, id, logo));
    }


    @GetMapping("/restaurants/get/{ownerId}")
    public List<Restaurant> getRestaurants(@PathVariable int ownerId) {
        return restaurantService.findByOwnerId(ownerId);
    }


    @GetMapping("/restaurants/get")
    public List<Restaurant> getAllRestaurants() {
        return restaurantService.findAll();
    }


    @DeleteMapping("/restaurant/delete/{id}")
    public ResponseMessage deleteRestaurant(@PathVariable int id) {
        return restaurantService.deleteById(id);
    }


    @PostMapping("/restaurant/menu-section/add/{id}")
    public ResponseMessage addMenuSection(@PathVariable int id,
                                          @RequestBody MenuSection menuSection) {
        menuSection.setRestaurant(restaurantService.findById(id));
        return menuSectionService.save(menuSection);
    }


    @GetMapping("/restaurant/menu-sections/get/{restaurantId}")
    public List<MenuSection> getMenuSections(@PathVariable int restaurantId) {
        return menuSectionService.findByRestaurantId(restaurantId);
    }


    @PostMapping("/restaurant/menu-section/change")
    public ResponseMessage changeMenuSection(@RequestBody MenuSection menuSection) {
        return menuSectionService.change(menuSection);
    }


    @DeleteMapping("/restaurant/menu-section/delete/{id}")
    public ResponseMessage deleteMenuSectionById(@PathVariable int id) {
        return menuSectionService.deleteById(id);
    }


    @PostMapping("/restaurant/dish/add/{restaurantId}/{sectionId}")
    public ResponseMessage addDish(@PathVariable int restaurantId,
                                   @PathVariable int sectionId,
                                   @RequestBody Dish dish) {
        dish.setMenuSection(menuSectionService.findById(sectionId));
        dish.setRestaurant(restaurantService.findById(restaurantId));
        return dishService.save(dish);
    }


    @GetMapping("/restaurant/dishes/get/{sectionId}")
    public List<Dish> getDishesBySectionId(@PathVariable int sectionId) {
        return dishService.findByMenuSectionId(sectionId);
    }


    @GetMapping("/restaurant/dishes/get/{restaurantId}")
    public List<Dish> getDishesByRestaurantId(@PathVariable int restaurantId) {
        return dishService.findByRestaurantId(restaurantId);
    }


    @PostMapping("/restaurant/dish/change")
    public ResponseMessage changeDish(@RequestBody Dish dish) {
        return dishService.change(dish);
    }

    @DeleteMapping("/restaurant/dish/delete/{id}")
    public ResponseMessage deleteDishById(@PathVariable int id) {
        return dishService.deleteById(id);
    }


}
