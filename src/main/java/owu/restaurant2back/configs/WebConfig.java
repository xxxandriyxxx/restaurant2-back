package owu.restaurant2back.configs;

import org.springframework.context.MessageSource;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.support.ReloadableResourceBundleMessageSource;
import org.springframework.format.FormatterRegistry;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.validation.MessageCodesResolver;
import org.springframework.validation.Validator;
import org.springframework.validation.beanvalidation.LocalValidatorFactoryBean;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.HandlerMethodReturnValueHandler;
import org.springframework.web.servlet.HandlerExceptionResolver;
import org.springframework.web.servlet.config.annotation.*;

import java.io.File;
import java.util.List;

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
//        registry.addViewController("/about").setViewName("about");
//    }

//    @Bean
//    public MessageSource messageSource() {
//        ReloadableResourceBundleMessageSource bundleMessageSource = new ReloadableResourceBundleMessageSource();
//        bundleMessageSource.setBasename("classpath:messages");
//        return bundleMessageSource;
//    }
//
//    @Bean
//    public LocalValidatorFactoryBean validatorFactoryBean() {
//        LocalValidatorFactoryBean validatorFactoryBean = new LocalValidatorFactoryBean();
//        validatorFactoryBean.setValidationMessageSource(messageSource());
//        return validatorFactoryBean;
//    }

//    @Override
//    public void addResourceHandlers(ResourceHandlerRegistry registry) {
//        String pathToFolder = System.getProperty("user.home") + File.separator + "Pictures" + File.separator;
//        registry.addResourceHandler("/ava/**").addResourceLocations("file:///" + pathToFolder);
//
//        String pathToFolder2 = System.getProperty("user.home") + File.separator + "StaticX" + File.separator;
//        registry.addResourceHandler("/css/**").addResourceLocations("file:///" + pathToFolder2);
//    }


//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/*").allowedOrigins("*").allowedMethods("GET", "POST", "OPTIONS", "PUT")
//                .allowedHeaders("Content-Type", "X-Requested-With", "accept", "Origin", "Access-Control-Request-Method",
//                        "Access-Control-Request-Headers")
//                .exposedHeaders("Access-Control-Allow-Origin", "Access-Control-Allow-Credentials")
//                .allowCredentials(true).maxAge(3600);
//    }



//    @Override
//    public void addCorsMappings(CorsRegistry registry) {
//        registry.addMapping("/**");
//    }





}
