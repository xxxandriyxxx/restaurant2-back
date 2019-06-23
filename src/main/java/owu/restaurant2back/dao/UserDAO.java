package owu.restaurant2back.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import owu.restaurant2back.models.User;

//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;

@Repository
public interface UserDAO extends JpaRepository<User, Integer> {

//    @Query(" select  u from User u where u.username=:name")
//    User findByUsername (@Param("username") String name);

    User findByUsername(String username);

    User findById(int id);

    User findByEmail(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);





}
