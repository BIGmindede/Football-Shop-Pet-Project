package ru.shop.footballShop.entites;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.LinkedList;
import java.util.List;

@Getter
@Setter
@ToString
@Builder
@Entity
@RequiredArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long id;

    String name;
    String email;
    String password;

    String role;

    @ManyToMany(mappedBy = "customerList")
    private List<Product> cart;

    @OneToMany(mappedBy = "owner")
    private List<Order> orders;

    public void addToCart(Product product) {
        if (cart == null)
            cart = new LinkedList<>();
        cart.add(product);
    }

    public void addOrder(Order order) {
        if (orders == null)
            orders = new LinkedList<>();
        orders.add(order);
    }

}
