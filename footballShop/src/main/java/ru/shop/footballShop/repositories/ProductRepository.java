package ru.shop.footballShop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shop.footballShop.entites.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
