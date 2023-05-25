package ru.shop.footballShop.services;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;
import ru.shop.footballShop.entites.Product;
import ru.shop.footballShop.entites.ProductImage;
import ru.shop.footballShop.errors.ProductNotFoundException;
import ru.shop.footballShop.repositories.ProductImageRepository;
import ru.shop.footballShop.repositories.ProductRepository;
import ru.shop.footballShop.utils.ImageNameService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductImageService {

    private final ProductImageRepository productImageRepository;
    private final ProductRepository productRepository;
    private final ImageNameService nameService;
    @Value("${upload-directory}")
    private String UPLOAD_DIRECTORY;

    @Transactional
    public void save(long productID, MultipartFile file) throws IOException, ProductNotFoundException {
        Optional<Product> optionalProduct = productRepository.findById(productID);
        if (optionalProduct.isEmpty())
            throw new ProductNotFoundException("Product not found");
        Product product = optionalProduct.get();


        String productName = nameService.generate(file.getContentType());
        Path filenameAndPath = Paths.get(UPLOAD_DIRECTORY + "/products", productName);
        Files.write(filenameAndPath, file.getBytes());

        ProductImage productImage = new ProductImage();
        productImage.setProduct(product);
        productImage.setUrl("/products/" + productName);

        productImageRepository.save(productImage);
    }

}
