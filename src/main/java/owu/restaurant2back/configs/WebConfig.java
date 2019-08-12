package owu.restaurant2back.configs;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;

import java.io.File;


@Configuration
public class WebConfig implements WebMvcConfigurer {

    // URL of the running front-end project
    // it used in EmailServiceImpl class
//    public static final String url = "http://localhost:4200";
    public static final String url = "http://localhost:8080";

//    public static final String url = "http://ec2-18-219-114-136.us-east-2.compute.amazonaws.com:8080";

    // path to the logos of restaurants
    // it also used in RestaurantService class
    public static final String pathToLogoFolder = System.getProperty("user.home") + File.separator + "Restaurant_Project"
            + File.separator + "Logo" + File.separator;

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        registry.addResourceHandler("/logo/**").addResourceLocations("file:///" + pathToLogoFolder);
    }

}
