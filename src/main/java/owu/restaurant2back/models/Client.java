package owu.restaurant2back.models;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@ToString(exclude = {"orders"})
@EqualsAndHashCode(callSuper = false)
@DiscriminatorValue("CLIENT")

public class Client extends User {
    @JsonIgnore
    @OneToMany(mappedBy = "client",
            fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    List<Order> orders = new ArrayList<>();


}
