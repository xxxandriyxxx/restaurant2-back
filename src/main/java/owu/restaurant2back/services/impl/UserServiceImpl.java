package owu.restaurant2back.services.impl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.User;
import owu.restaurant2back.services.EmailService;
import owu.restaurant2back.services.UserService;


import java.util.List;

//@Service (value = "nameasdqwe")
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private EmailService emailService;

    @Override
    public ResponseMessage save(User user) {
        if (user == null) {
            return new ResponseMessage("ERROR: User == null");
        } else if (userDAO.existsByUsername(user.getUsername())) {
            return new ResponseMessage("ERROR: User with such login already exists");
        } else if (userDAO.existsByEmail(user.getEmail())) {
            return new ResponseMessage("ERROR: User with such email already exists");
        } else {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            userDAO.save(user);
//            System.out.println(emailService.sendEmail(user.getEmail())); //розкоментувати
            return new ResponseMessage("SUCCESS: User has been saved!");
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

    @Override
    public ResponseMessage activation(String jwt) {
        String email;

        try {
            email = Jwts.parser().
                    setSigningKey("yes".getBytes()).
                    parseClaimsJws(jwt).getBody().getSubject();
        } catch (MalformedJwtException e) {
            System.out.println(e.toString());
            return new ResponseMessage("ERROR of activation");
        }
        User user = userDAO.findByEmail(email);
        if (user == null) {
            return new ResponseMessage("ERROR of activation : user == null");
        } else {
            user.setEnabled(true);
            userDAO.save(user);
            return new ResponseMessage("SUCCESS of activation!");
        }
    }


    @Override
    public User findUserByEmail(String email) {
        return userDAO.findByEmail(email);

//        if (userDAO.existsByEmail(email)) {
//            return userDAO.findByEmail(email);
//        } else {
//            return new User();
//        }
    }


}
