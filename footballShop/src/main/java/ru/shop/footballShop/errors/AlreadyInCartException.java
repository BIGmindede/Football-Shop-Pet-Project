package ru.shop.footballShop.errors;

public class AlreadyInCartException extends Exception {
    public AlreadyInCartException(String m) {
        super(m);
    }
}
