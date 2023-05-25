package ru.shop.footballShop.dto;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.FieldDefaults;
import ru.shop.footballShop.entites.OrderStatus;

import java.time.LocalDate;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderDTO {
    long id;
    String address;
    LocalDate creationDate;
    String phone;
    OrderStatus status;
    Float total;
    CustomerDTO customer;
    List<OrderItemDTO> orderItems;
}
