package owu.restaurant2back.services.impl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.BasicData;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.models.User;
import owu.restaurant2back.services.EmailService;
import owu.restaurant2back.services.UserService;

import java.util.List;


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
            return new ResponseMessage("ERROR: The user with the same login already exists");
        } else if (userDAO.existsByEmail(user.getEmail())) {
            return new ResponseMessage("ERROR: The user with the same email already exists");
        }
        System.out.println("user = " + user.toString());
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userDAO.save(user);
//        System.out.println(emailService.confirmAfterSave(user.getEmail())); // uncomment it and change isEnable in User class
        return new ResponseMessage("You have been registered. " +
                "A confirmation letter was sent to your email address. " +
                "Please, follow the instruction in the letter to activate your account.");
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
            return new ResponseMessage("SUCCESS of activation");
        }
    }

    @Override
    public User findById(int id) {
        return userDAO.findById(id);
    }

    @Override
    public User findUserByEmail(String email) {
        return userDAO.findByEmail(email);
    }

    @Override
    public boolean existsByEmail(String email) {
        return userDAO.existsByEmail(email);
    }

    @Override
    public ResponseMessage update(int id, BasicData basicData) {
        User userForUpdate = userDAO.findById(id);
        List<User> users = userDAO.findAll();
        users.remove(userForUpdate);

        for (User u : users) {
            if (u.getUsername().equals(basicData.getUsername())) {
                return new ResponseMessage("ERROR: The user with the same login already exists");
            }
            if (u.getEmail().equals(basicData.getEmail())) {
                return new ResponseMessage("ERROR: The user with the same email already exists");
            }
        }
        userForUpdate.setUsername(basicData.getUsername());
        userForUpdate.setPassword(passwordEncoder.encode(basicData.getPassword()));
        if (userForUpdate.getEmail().equals(basicData.getEmail())) {
            userDAO.save(userForUpdate);
            return new ResponseMessage("Your account data have been updated");
        } else {
            userForUpdate.setEmail(basicData.getEmail());
//            userForUpdate.setEnabled(false); // uncomment it and change isEnable in User class
            userDAO.save(userForUpdate);
//            System.out.println(emailService.confirmAfterUpdate(userForUpdate.getEmail())); // uncomment it and change isEnable in User class
            return new ResponseMessage("Your account data have been updated. " +
                    "A confirmation letter was sent to your new email address. " +
                    "Follow the instruction in the letter to activate your account.");
        }

    }


}
