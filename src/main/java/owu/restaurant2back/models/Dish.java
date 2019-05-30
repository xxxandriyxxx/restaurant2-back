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
@ToString(exclude = {"menuSection"})
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Dish {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(unique = true)
    String name;
    String description;
    double price;
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    Restaurant restaurant;
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    MenuSection menuSection;
    @JsonIgnore
    @ManyToMany(mappedBy = "dishes",
            fetch = FetchType.LAZY,
            cascade = {CascadeType.MERGE, CascadeType.PERSIST, CascadeType.REFRESH})
    List<Order> orders = new ArrayList<>();

}
