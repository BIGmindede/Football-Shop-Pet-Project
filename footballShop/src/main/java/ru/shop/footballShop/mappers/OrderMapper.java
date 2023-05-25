package ru.shop.footballShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.footballShop.dto.OrderDTO;
import ru.shop.footballShop.entites.Order;

@Mapper(uses = {CustomerMapper.class, ProductMapper.class})
public interface OrderMapper {
    OrderMapper INSTANCE = Mappers.getMapper(OrderMapper.class);

    OrderDTO convertOrderToOrderDTO(Order order);

}
