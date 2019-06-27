package owu.restaurant2back.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity(name = "Dishes")
@Getter
@Setter
@ToString(exclude = {"restaurant", "menuSection", "orders"})
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String name;
    String description;
    double price;
    int amount;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    Restaurant restaurant;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    MenuSection menuSection;

    @JsonIgnore
    @ManyToMany(mappedBy = "dishes",
            fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH})
    List<Order> orders = new ArrayList<>();

}
