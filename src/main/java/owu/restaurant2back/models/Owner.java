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
@ToString(exclude = {"restaurants"})
@EqualsAndHashCode(callSuper = false)
@FieldDefaults(level = AccessLevel.PRIVATE)
@DiscriminatorValue("OWNER")

public class Owner extends User {

    @JsonIgnore
    @OneToMany(mappedBy = "owner",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<Restaurant> restaurants = new ArrayList<>();
}
