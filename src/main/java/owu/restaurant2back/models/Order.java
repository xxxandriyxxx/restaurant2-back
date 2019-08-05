package owu.restaurant2back.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.*;
import lombok.experimental.FieldDefaults;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;


@Entity(name = "orders")
@Getter
@Setter
@ToString()
@EqualsAndHashCode
@FieldDefaults(level = AccessLevel.PRIVATE)

public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    Date date;
    @Enumerated(EnumType.STRING)
    OrderStatus status;
    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    User user;
    String username;
    @JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
    @ManyToOne(fetch = FetchType.LAZY,
            cascade = CascadeType.DETACH)
    Restaurant restaurant;
    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {CascadeType.DETACH})
    List<Dish> dishes = new ArrayList<>();
    int[] amount;

}
