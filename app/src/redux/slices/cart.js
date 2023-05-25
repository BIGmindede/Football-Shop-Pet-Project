import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const initialState = {
    goods: []
}

export const fetchCart = createAsyncThunk('fetchCart',
    async () => {
        const {data} = await axios.get("http://localhost:8080/cart",
            {
                headers: {
                    "Authorization": "Bearer " + cookies.get("token")
                }
            }
        )
        return data
    }
)

export const fetchAddCart = createAsyncThunk('fetchAddCart',
    async (good) => {
        const {data} = await axios.post(`http://localhost:8080/cart/add/${good.id}`, good,
            {
                headers: {
                    "Authorization": "Bearer " + cookies.get("token")
                }
            }
        )
        return {
            ...good,
            images: []
        }
    }
)

export const fetchDelCart = createAsyncThunk('fetchDelCart',
    async (good) => {
        const {data} = await axios.post(`http://localhost:8080/cart/delete/${good.id}`, good,
            {
                headers: {
                    "Authorization": "Bearer " + cookies.get("token")
                }
            }
        )
        return good
    }
)

const cartSlice = createSlice({
    name: "cartGoods",
    initialState,
    reducers: {},
    extraReducers: {
        //Отправка запроса на получение товаров
        [fetchCart.fulfilled]: (state, action) => {
            state.goods = action.payload
        },
        //Отправка запроса на добавление товаров
        [fetchAddCart.fulfilled]: (state, action) => {
            state.goods = [...state.goods, action.payload]
        },
        //Отправка запроса на удаление товара
        [fetchDelCart.fulfilled]: (state, action) => {
            state.goods = state.goods.filter(good => good.id !== action.payload.id)
        },
    }
})

export const cartReducer = cartSlice.reducer
export const selectCart = (state) => state.cart.goods