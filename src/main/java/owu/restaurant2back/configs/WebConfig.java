package owu.restaurant2back.configs;


import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.*;
import java.io.File;


@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {
        String pathToFolder = System.getProperty("user.home") + File.separator + "Restaurant_Project"
                + File.separator + "Logo" + File.separator;
        registry.addResourceHandler("/logo/**").addResourceLocations("file:///" + pathToFolder);
    }

}
