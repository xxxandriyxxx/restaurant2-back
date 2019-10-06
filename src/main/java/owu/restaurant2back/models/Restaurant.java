package owu.restaurant2back.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;
import owu.restaurant2back.models.statistics.RestaurantStatistics;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity(name = "restaurants")
@Getter
@Setter
@ToString(exclude = {"menuSections", "dishes", "orders", "restaurantStatistics"})
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)


public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    //    @Column(unique = true)
    String name;
    String address;
    String phoneNumber;
    String site;
    String about;
    String logo;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    Owner owner;
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<MenuSection> menuSections = new ArrayList<>();
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<Dish> dishes = new ArrayList<>();
    @JsonIgnore
    @OneToMany(mappedBy = "restaurant",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<Order> orders = new ArrayList<>();

    @JsonIgnore
    @OneToOne(mappedBy = "restaurant",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    RestaurantStatistics restaurantStatistics;
}
