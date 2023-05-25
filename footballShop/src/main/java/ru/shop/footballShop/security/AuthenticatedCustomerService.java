package ru.shop.footballShop.security;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import ru.shop.footballShop.entites.Customer;

@Service
public class AuthenticatedCustomerService {
    public Customer getAuthenticatedCustomer() {
        CustomerDetails customerDetails = (CustomerDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return customerDetails.getCustomer();
    }
}
