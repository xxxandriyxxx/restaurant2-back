package owu.restaurant2back.dao.statistics;

import org.springframework.data.jpa.repository.JpaRepository;
import owu.restaurant2back.models.statistics.DishStatistics;

public interface DishStatisticDAO extends JpaRepository<DishStatistics, Integer> {

}
