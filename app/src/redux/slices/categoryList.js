import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categories: ["Мячи", "Защита", "Форма", "Для тренировки", "Обувь", "Перчатки", "Другое"]
}

const catsSlice = createSlice({
    name: "catsSlice",
    initialState,
    reducers: {}
})

export const catsReducer = catsSlice.reducer
export const { setCats } = catsSlice.actions
export const selectCats = (state) => state.categories.categories