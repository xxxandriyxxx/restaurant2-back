package owu.restaurant2back.services.impl;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import owu.restaurant2back.services.EmailService;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Date;

@PropertySource("classpath:application.properties")
@Service
public class EmailServiceImpl implements EmailService {

    @Autowired
    Environment env;

    @Autowired
    JavaMailSender javaMailSender;

    @Override
    public String sendEmail(String email, String message) {
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper helper;
        String token = Jwts.builder()
                .setSubject(email)
                .signWith(SignatureAlgorithm.HS512, "yes".getBytes())
                .setExpiration(new Date(System.currentTimeMillis() + 200000))
                .compact();
        System.out.println("token = "+token);
        try {
            helper = new MimeMessageHelper(mimeMessage, true);
        } catch (MessagingException e) {
            e.printStackTrace();
            return String.valueOf(e);
        }
        try {
            mimeMessage.setFrom(new InternetAddress(env.getProperty("spring.mail.username")));
            helper.setTo(email);
            helper.setText("http://localhost:8080/activation/" + token,true);
            helper.setSubject("ACCOUNT ACTIVATION");
        } catch (MessagingException e) {
            e.printStackTrace();
            return String.valueOf(e);
        }
        javaMailSender.send(mimeMessage);
        return "Confirmation message was sent!";
    }


}
