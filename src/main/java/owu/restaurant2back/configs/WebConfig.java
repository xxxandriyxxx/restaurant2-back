package owu.restaurant2back.configs;


import org.apache.tomcat.util.descriptor.web.ErrorPage;
import org.springframework.boot.web.server.WebServerFactoryCustomizer;
import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
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

//    @Override
//    public void addViewControllers(ViewControllerRegistry registry) {
//        registry.addViewController("/").setViewName("forward:/index.html");
//    }





}
