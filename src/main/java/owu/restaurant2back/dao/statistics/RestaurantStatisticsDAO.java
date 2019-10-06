package owu.restaurant2back.dao.statistics;

import org.springframework.data.jpa.repository.JpaRepository;
import owu.restaurant2back.models.statistics.RestaurantStatistics;

public interface RestaurantStatisticsDAO extends JpaRepository<RestaurantStatistics, Integer> {

    RestaurantStatistics findByRestaurantId (int id);

}
