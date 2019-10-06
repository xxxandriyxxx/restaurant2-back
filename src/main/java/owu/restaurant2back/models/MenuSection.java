package owu.restaurant2back.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;
import owu.restaurant2back.models.statistics.MenuSectionStatistics;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "menuSections")
@Getter
@Setter
@ToString(exclude = {"restaurant", "dishes"})
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class MenuSection {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    Restaurant restaurant;
//    @JsonIgnore
    @OneToMany(mappedBy = "menuSection",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<Dish> dishes = new ArrayList<>();



//    ------------------------------------------
    @JsonIgnore
    @OneToOne(mappedBy = "menuSection",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    MenuSectionStatistics menuSectionStatistics;
}
