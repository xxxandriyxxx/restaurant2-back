package owu.restaurant2back.services;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import owu.restaurant2back.models.BasicData;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.User;

import java.util.List;

public interface UserService extends UserDetailsService {

    ResponseMessage save(User user);

    List<User> findAll();

    User findOneById(Integer id);

    ResponseMessage activation(String jwt);

    User findById(int id);

    User findUserByEmail(String email);

    boolean existsByEmail(String email);

    ResponseMessage updateProfile(int id, BasicData basicData);

//    UserDetails loadUserByUsername(String username);


}
