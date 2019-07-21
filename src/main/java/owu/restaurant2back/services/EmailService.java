package owu.restaurant2back.services;

import owu.restaurant2back.models.ResponseMessage;

public interface EmailService {

    public String confirmAfterSave(String email);

    public String confirmAfterUpdate(String email);

    public String sendEmail(String email, String message);
}
