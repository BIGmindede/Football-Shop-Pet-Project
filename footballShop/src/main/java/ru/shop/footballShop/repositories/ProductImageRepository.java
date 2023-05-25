package ru.shop.footballShop.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import ru.shop.footballShop.entites.ProductImage;

public interface ProductImageRepository extends JpaRepository<ProductImage, Long> {
}
