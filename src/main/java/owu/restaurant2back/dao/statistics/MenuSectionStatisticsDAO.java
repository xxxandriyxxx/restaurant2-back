package owu.restaurant2back.dao.statistics;

import org.springframework.data.jpa.repository.JpaRepository;
import owu.restaurant2back.models.statistics.MenuSectionStatistics;

public interface MenuSectionStatisticsDAO extends JpaRepository<MenuSectionStatistics, Integer> {

    MenuSectionStatistics findByMenuSectionId(int id);

}
