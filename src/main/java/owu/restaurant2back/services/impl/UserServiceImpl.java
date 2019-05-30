package owu.restaurant2back.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.User;
import owu.restaurant2back.services.UserService;


import java.util.List;

//@Service (value = "nameasdqwe")
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public ResponseMessage save(User user) {
        if (user == null) {
            return new ResponseMessage("ERROR: User == null !");
        } else if (userDAO.existsByUsername(user.getUsername())) {
            return new ResponseMessage("ERROR: User with such login already exists !");
        } else if (userDAO.existsByEmail(user.getEmail())) {
            return new ResponseMessage("ERROR: User with such email already exists ! !");
        } else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userDAO.save(user);
            return new ResponseMessage("SUCCESS: User has been saved !");
        }

    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public User findOneById(Integer id) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return userDAO.findByUsername(username);
    }
}
