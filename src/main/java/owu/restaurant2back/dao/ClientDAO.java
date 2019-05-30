package owu.restaurant2back.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.Client;
import owu.restaurant2back.models.Restaurant;

@Repository
public interface ClientDAO extends JpaRepository<Client,Integer> {
    Client findByUsername(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);

}
