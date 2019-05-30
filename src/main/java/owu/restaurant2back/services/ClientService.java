package owu.restaurant2back.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import owu.restaurant2back.models.Client;
import owu.restaurant2back.models.ResponseMessage;


import java.util.List;

public interface ClientService extends UserDetailsService {

    ResponseMessage save(Client client);

    List<Client> findAll();

    Client findOneById(Integer id);
}
