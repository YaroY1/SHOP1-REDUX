import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../app/store';

export type ProductCategory = 'phones' | 'RTV' | 'AGD'

export interface ProductPhoto {
    name: string;
    fileName: string;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    category: ProductCategory;
    photos: ProductPhoto[]
}

export interface ProductsState {
    // Produkty
    data: Product[]
    // TODO: dodanie filtrów
    // TODO: dodanie sortowania
}

const initialState: ProductsState = {
    data: []
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        // brak reducerów
    }
})

export const {} = productsSlice.actions;

//! Selektory
export const selectProducts = (state: RootState): Product[] => state.product.data

export default productsSlice.reducer