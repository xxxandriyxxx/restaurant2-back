package owu.restaurant2back.models.statistics;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import lombok.experimental.FieldDefaults;
import owu.restaurant2back.models.Restaurant;
import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "restaurantStatistics")
@Getter
@Setter
@ToString (exclude = "menuSectionStatistics")
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class RestaurantStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int[] amountByMonths = new int[12];
    double[] costByMonths = new double[12];

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    Restaurant restaurant;

    @OneToMany(mappedBy = "restaurantStatistics",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<MenuSectionStatistics> menuSectionStatistics = new ArrayList<>();

}
