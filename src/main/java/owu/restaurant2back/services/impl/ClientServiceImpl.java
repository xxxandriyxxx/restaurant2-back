package owu.restaurant2back.services.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import owu.restaurant2back.dao.ClientDAO;

import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.Client;
import owu.restaurant2back.models.ResponseMessage;
import owu.restaurant2back.services.ClientService;

import java.util.List;

@Service
public class ClientServiceImpl implements ClientService {

    @Autowired
    private UserDAO userDAO;
    @Autowired
    private ClientDAO clientDAO;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public ResponseMessage save(Client client) {
        if (client == null) {
            return new ResponseMessage("ERROR: Client == null !");
        } else if (userDAO.existsByUsername(client.getUsername())) {
            return new ResponseMessage("ERROR: User with such login already exists !");
        } else if (userDAO.existsByEmail(client.getEmail())) {
            return new ResponseMessage("ERROR: User with such email already exists !");
        } else {
            client.setPassword(passwordEncoder.encode(client.getPassword()));
            clientDAO.save(client);
            return new ResponseMessage("SUCCESS: Client has been saved !");
        }
    }

    @Override
    public List<Client> findAll() {
        return null;
    }

    @Override
    public Client findOneById(Integer id) {
        return null;
    }

    @Override
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        return null;
    }
}
