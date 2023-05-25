package ru.shop.footballShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.footballShop.dto.NewProductDTO;
import ru.shop.footballShop.dto.ProductDTO;
import ru.shop.footballShop.entites.Product;

@Mapper
public interface ProductMapper {
    ProductMapper INSTANCE = Mappers.getMapper(ProductMapper.class);

    ProductDTO convertProductToProductDTO(Product product);

    Product convertProductDTOToProduct(ProductDTO productDTO);

    Product convertNewProductDTOToProduct(NewProductDTO newProductDTO);
}
