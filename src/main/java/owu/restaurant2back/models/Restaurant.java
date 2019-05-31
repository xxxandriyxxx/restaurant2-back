package owu.restaurant2back.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity(name = "restaurants")
@Getter
@Setter
@ToString(exclude = {"menuSections", "dishes", "orders"})
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
    String bigPicture;
    String smallPicture;
    String about;
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
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
}
