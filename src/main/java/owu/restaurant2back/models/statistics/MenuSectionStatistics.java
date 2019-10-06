package owu.restaurant2back.models.statistics;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import lombok.experimental.FieldDefaults;
import owu.restaurant2back.models.MenuSection;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "menuSectionStatistics")
@Getter
@Setter
@ToString(exclude = {"restaurantStatistics", "dishStatistics" })
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class MenuSectionStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int[] amountByMonths = new int[12];
    double[] costByMonths = new double[12];

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    MenuSection menuSection;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    RestaurantStatistics restaurantStatistics;

    @OneToMany(mappedBy = "menuSectionStatistics",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<DishStatistics> dishStatistics = new ArrayList<>();

}
