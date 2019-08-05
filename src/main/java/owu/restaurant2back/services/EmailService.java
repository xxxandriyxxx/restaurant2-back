package owu.restaurant2back.services;

public interface EmailService {

    public String confirmAfterSave(String email);

    public String confirmAfterUpdate(String email);

    public String sendEmail(String email, String message);
}
