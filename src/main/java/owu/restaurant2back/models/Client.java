package owu.restaurant2back.models;


import lombok.*;
import javax.persistence.*;


@Entity
@Getter
@Setter
@ToString
@EqualsAndHashCode(callSuper = false)
@DiscriminatorValue("CLIENT")

public class Client extends User {

}
