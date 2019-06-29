package owu.restaurant2back.models;

public enum OrderStatus {
    ORDERED,
    CONFIRMED_BY_RESTAURANT,
    CANCELED_BY_CLIENT,
    CANCELED_BY_RESTAURANT,
    PAID
}
