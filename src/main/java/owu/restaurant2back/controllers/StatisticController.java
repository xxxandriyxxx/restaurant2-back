package owu.restaurant2back.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import owu.restaurant2back.models.statistics.RestaurantStatistics;
import owu.restaurant2back.services.StatisticsService;
import java.util.List;

@RestController
public class StatisticController {

    @Autowired
    StatisticsService statisticsService;

    @GetMapping("/statistics/get/{ownerId}")
    public List<RestaurantStatistics> getRestaurantStatistics(@PathVariable int ownerId) {
        return statisticsService.findByOwnerId(ownerId);
    }


}
