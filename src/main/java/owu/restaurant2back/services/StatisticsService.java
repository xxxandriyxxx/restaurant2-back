package owu.restaurant2back.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.RestaurantDAO;
import owu.restaurant2back.dao.statistics.DishStatisticDAO;
import owu.restaurant2back.dao.statistics.MenuSectionStatisticsDAO;
import owu.restaurant2back.dao.statistics.RestaurantStatisticsDAO;
import owu.restaurant2back.models.Dish;
import owu.restaurant2back.models.MenuSection;
import owu.restaurant2back.models.Order;
import owu.restaurant2back.models.Restaurant;
import owu.restaurant2back.models.statistics.DishStatistics;
import owu.restaurant2back.models.statistics.MenuSectionStatistics;
import owu.restaurant2back.models.statistics.RestaurantStatistics;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.List;

@Service
public class StatisticsService {

    @Autowired
    private RestaurantDAO restaurantDAO;

    @Autowired
    private RestaurantStatisticsDAO restaurantStatisticsDAO;

    @Autowired
    private MenuSectionStatisticsDAO menuSectionStatisticsDAO;

    @Autowired
    private DishStatisticDAO dishStatisticDAO;


    public void createRestaurantStatistics(Restaurant restaurant) {
        RestaurantStatistics restaurantStatistics = new RestaurantStatistics();
        restaurantStatistics.setRestaurant(restaurant);
        restaurantStatisticsDAO.save(restaurantStatistics);
    }

    public void createMenuSectionStatistics(MenuSection menuSection) {
        MenuSectionStatistics menuSectionStatistics = new MenuSectionStatistics();
        menuSectionStatistics.setMenuSection(menuSection);
        menuSectionStatistics.setRestaurantStatistics(
                restaurantStatisticsDAO.findByRestaurantId(menuSection.getRestaurant().getId()));
        menuSectionStatisticsDAO.save(menuSectionStatistics);
    }

    public void creteDishStatistics(Dish dish) {
        DishStatistics dishStatistics = new DishStatistics();
        dishStatistics.setDish(dish);
        dishStatistics.setMenuSectionStatistics(
                menuSectionStatisticsDAO.findByMenuSectionId(dish.getMenuSection().getId()));
        dishStatisticDAO.save(dishStatistics);
    }


    public void changeStatistics(Order order) {
        Calendar cal = Calendar.getInstance();
        cal.setTime(order.getDate());
        int month = cal.get(Calendar.MONTH);

        RestaurantStatistics restaurantStatistics = restaurantStatisticsDAO.findByRestaurantId(
                order.getRestaurant().getId());

        for (Dish dish : order.getDishes()) {
            int amount = order.getAmount()[order.getDishes().indexOf(dish)];
            double totalCost = dish.getPrice() * amount;
            restaurantStatistics.getAmountByMonths()[month] += amount;
            restaurantStatistics.getCostByMonths()[month] += totalCost;
            restaurantStatisticsDAO.save(restaurantStatistics);

            outerLoop:
            for (MenuSectionStatistics menuSectionStatistics : restaurantStatistics.getMenuSectionStatistics()) {
                if (menuSectionStatistics.getMenuSection() == dish.getMenuSection()) {
                    menuSectionStatistics.getAmountByMonths()[month] += amount;
                    menuSectionStatistics.getCostByMonths()[month] += totalCost;
                    menuSectionStatisticsDAO.save(menuSectionStatistics);
                    for (DishStatistics dishStatistic : menuSectionStatistics.getDishStatistics()) {
                        if (dishStatistic.getDish() == dish) {
                            dishStatistic.getAmountByMonths()[month] += amount;
                            dishStatistic.getCostByMonths()[month] += totalCost;
                            dishStatisticDAO.save(dishStatistic);
                            break outerLoop;
                        }
                    }
                }
            }
        }
    }


    public List<RestaurantStatistics> findByOwnerId(int id) {
        List<RestaurantStatistics> restaurantStatistics = new ArrayList<>();
        List<Restaurant> restaurants = restaurantDAO.findByOwnerId(id);
        for (Restaurant rest : restaurants) {
            restaurantStatistics.add(restaurantStatisticsDAO.findByRestaurantId(rest.getId()));
        }
        return restaurantStatistics;
    }

}
