package ru.shop.footballShop.controllers;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.shop.footballShop.security.AuthenticationRequest;
import ru.shop.footballShop.security.AuthenticationResponse;
import ru.shop.footballShop.security.AuthenticationService;
import ru.shop.footballShop.security.RegisterRequest;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService service;

    /**
     * POST - "/register"
     * Регистрация
     *
     * @param request - json запрос вида {
     *                "name": "name",
     *                "email": "email",
     *                "password": "pass",
     *                }
     * @return JWT-token вида {
     * "token": токен
     * }
     */

    @PostMapping("/register")
    public AuthenticationResponse register(@RequestBody RegisterRequest request) {
        return service.register(request);
    }

    /**
     * POST - "/authenticate"
     * Аутентификация
     *
     * @param request - json запрос вида {
     *                "email": email,
     *                "password" password
     *                }
     * @return JWT-token вида {
     * "token": токен
     * }
     */

    @PostMapping("/login")
    public AuthenticationResponse authenticate(@RequestBody AuthenticationRequest request) {
        return service.authenticate(request);
    }


}
