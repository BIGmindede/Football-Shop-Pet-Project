package ru.shop.footballShop.mappers;

import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
import ru.shop.footballShop.dto.CustomerDTO;
import ru.shop.footballShop.entites.Customer;

@Mapper
public interface CustomerMapper {
    CustomerMapper INSTANCE = Mappers.getMapper(CustomerMapper.class);
    CustomerDTO convertCustomerToCustomerDTO(Customer customer);
}
