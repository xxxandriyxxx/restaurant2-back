package owu.restaurant2back.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.MenuSection;

import java.util.List;

@Repository
public interface MenuSectionDAO extends JpaRepository<MenuSection, Integer> {

    List<MenuSection> findByRestaurantId(int id);

    MenuSection findById(int id);

    boolean existsByNameAndRestaurantId(String name, int id);


}
