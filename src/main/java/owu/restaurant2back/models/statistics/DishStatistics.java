package owu.restaurant2back.models.statistics;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import lombok.experimental.FieldDefaults;
import owu.restaurant2back.models.Dish;
import javax.persistence.*;

@Entity(name = "dishStatistics")
@Getter
@Setter
@ToString (exclude = {"menuSectionStatistics"})
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class DishStatistics {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    int[] amountByMonths = new int[12];
    double[] costByMonths = new double[12];

    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @OneToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    Dish dish;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    MenuSectionStatistics menuSectionStatistics;

}
