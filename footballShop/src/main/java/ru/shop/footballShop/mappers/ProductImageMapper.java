package ru.shop.footballShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.footballShop.dto.ProductImageDTO;
import ru.shop.footballShop.entites.ProductImage;

@Mapper
public interface ProductImageMapper {
    ProductImageMapper INSTANCE = Mappers.getMapper(ProductImageMapper.class);

    ProductImageDTO convertProductImageToProductImageDTO(ProductImage productImage);
}
