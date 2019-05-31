package owu.restaurant2back.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.User;

import java.util.List;

public interface UserService extends UserDetailsService {

    ResponseMessage save(User user);

    List<User> findAll();

    User findOneById(Integer id);

    String activation(String jwt);

}
