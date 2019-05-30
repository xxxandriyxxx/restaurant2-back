package owu.restaurant2back.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@ToString(exclude = {"menuSections", "dishes", "orders"})
@EqualsAndHashCode(callSuper = false)
@FieldDefaults(level = AccessLevel.PRIVATE)
@DiscriminatorValue("RESTAURANT")

public class Restaurant extends User {
    String address;
    String phoneNumber;
    String bigPicture;
    String smallPicture;
    String about;
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
