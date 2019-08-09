package owu.restaurant2back.services;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import owu.restaurant2back.dao.RestaurantDAO;
import owu.restaurant2back.dao.UserDAO;
import owu.restaurant2back.models.*;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;


@Service
public class RestaurantService {

    @Autowired
    private RestaurantDAO restaurantDAO;

    @Autowired
    private UserDAO userDAO;

    private String pathToLogoFolder = System.getProperty("user.home") + File.separator + "Restaurant_Project"
            + File.separator + "Logo" + File.separator;

//    private String pathToLogoFolder = "D:" + File.separator + "Okten" + File.separator +
//            "Project" + File.separator + "restaurant2-front" + File.separator +
//            "src" + File.separator + "assets" + File.separator + "img" + File.separator;


    //     The same owner can add restaurants with the same names, but then their addresses must be different
    //     (for example, a restaurant chain).
    //     Different owners can have restaurants with the same names, but then their address must be different too.
    public ResponseMessage save(int ownerId, String restaurant, MultipartFile logo) throws IOException {
        Restaurant newRestaurant = new ObjectMapper().readValue(restaurant, Restaurant.class);
        newRestaurant.setOwner((Owner) userDAO.findById(ownerId));
        String name = newRestaurant.getName();
        String address = newRestaurant.getAddress();
        System.out.println(name);
        System.out.println(address);

        if (restaurantDAO.existsByNameAndAddressAndOwnerId(name, address, ownerId)) {
            return new ResponseMessage("ERROR: You already have a restaurant with a such name at this address");
        } else if (restaurantDAO.existsByNameAndAddress(name, address)) {
            return new ResponseMessage("ERROR: The other owner has already registered a restaurant with " +
                    "a such name at this address");
        } else {
            restaurantDAO.save(newRestaurant);
            return new ResponseMessage("The restaurant has been added. " +
                    saveLogo(ownerId, newRestaurant.getId(), logo));
        }
    }


    public Restaurant findById(int id) {
        return restaurantDAO.findById(id);
    }

    public List<Restaurant> findByOwnerId(int id) {
        return restaurantDAO.findByOwnerId(id);
    }

    public List<Restaurant> findAll() {
        System.out.println("findAllRestaurants service works");
        return restaurantDAO.findAll();
    }

    public ResponseMessage deleteById(int id) {
        restaurantDAO.deleteById(id);
        return new ResponseMessage("The restaurant has been deleted");
    }

    public String saveLogo(int ownerId, int restId, MultipartFile logo) {
        try {
            logo.transferTo(new File(pathToLogoFolder + ownerId + "_" + restId + "_" +
                    logo.getOriginalFilename()));
            Restaurant restaurant = restaurantDAO.findById(restId);
            restaurant.setLogo(ownerId + "_" + restId + "_" + logo.getOriginalFilename());
            restaurantDAO.save(restaurant);
            return "The logo has been saved";
        } catch (IOException e) {
//            e.printStackTrace();
            return "ERROR: failed to save the logo";
        }
    }

    public String changeLogo(int ownerId, int restId, MultipartFile logo) {
        String oldLogo = restaurantDAO.findById(restId).getLogo();
        Path path = FileSystems.getDefault().getPath(pathToLogoFolder + oldLogo);
        try {
            Files.delete(path);
            return saveLogo(ownerId, restId, logo);
        } catch (IOException e) {
//            e.printStackTrace();
            return "ERROR: failed to delete the logo";
        }
    }


    // change except logo
    public ResponseMessage change(Restaurant rest) {
        Restaurant restForUpdate = restaurantDAO.findById(rest.getId());
        String newName = rest.getName();
        String newAddress = rest.getAddress();
        int ownerId = restForUpdate.getOwner().getId();
        List<Restaurant> myRestaurants = restaurantDAO.findByOwnerId(ownerId);
        List<Restaurant> allRestaurants = restaurantDAO.findAll();

        myRestaurants.remove(restForUpdate);
        allRestaurants.remove(restForUpdate);

        for (Restaurant r : myRestaurants) {
            if (r.getName().equals(newName) && r.getAddress().equals(newAddress)) {
                return new ResponseMessage("ERROR: You already have a restaurant with a such name at this address");
            }
        }
        for (Restaurant r : allRestaurants) {
            if (r.getName().equals(newName) && r.getAddress().equals(newAddress)) {
                return new ResponseMessage("ERROR: The other owner has already registered a restaurant with " +
                        "a such name at this address");
            }
        }
        restForUpdate.setName(newName);
        restForUpdate.setAddress(newAddress);
        restForUpdate.setAbout(rest.getAbout());
        restForUpdate.setPhoneNumber(rest.getPhoneNumber());
        restForUpdate.setSite(rest.getSite());
        restaurantDAO.save(restForUpdate);
        return new ResponseMessage("The restaurant has been updated");
    }


}
