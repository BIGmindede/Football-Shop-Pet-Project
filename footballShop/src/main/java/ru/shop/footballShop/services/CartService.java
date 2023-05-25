package ru.shop.footballShop.services;

import lombok.RequiredArgsConstructor;
import org.hibernate.Hibernate;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.shop.footballShop.entites.Customer;
import ru.shop.footballShop.entites.Product;
import ru.shop.footballShop.repositories.CustomerRepository;
import ru.shop.footballShop.repositories.ProductRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CartService {

    private final CustomerRepository customerRepository;
    private final ProductRepository productRepository;

    public List<Product> findCartByPerson(long customerId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);
        Hibernate.initialize(customer.getCart());
        return customer.getCart();
    }

    @Transactional
    public void addItemToCart(long customerId, long productId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);
        Product product = productRepository.findById(productId).orElse(null);;

        customer.addToCart(product);
        product.addToCart(customer);
    }

    @Transactional
    public void removeItemFromCart(long customerId, long productId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);
        Product product = productRepository.findById(productId).orElse(null);;

        customer.getCart().remove(product);
        product.getCustomerList().remove(customer);
    }

    public Product isInCart(long customerId, long productId) {
        Customer customer = customerRepository.findById(customerId).orElse(null);
        return customer.getCart().stream().filter(i -> i.getId() == productId).findAny().orElse(null);
    }

}
