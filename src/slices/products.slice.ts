import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";
import { firestoreService } from "../service/firestore/firestore.service";

export type ProductCategory = "phones" | "RTV" | "AGD";

export interface ProductPhoto {
	// name: string;
	// fileName: string;
	url: string;
}

export interface Product {
	firebaseId?: string;
	id: string;
	name: string;
	price: number;
	quantity: number;
	description: string;
	category: ProductCategory;
	photos: ProductPhoto[];
}

export type SortingType =
	| "none"
	| "id-asc"
	| "id-desc"
	| "name-asc"
	| "name-desc"
	| "price-asc"
	| "price-desc"
	| "quantity-asc"
	| "quantity-desc";

export interface ProductsState {
	// Produkty
	data: Product[];
	sorting: SortingType;
	// TODO: dodanie filtrów
}

const initialState: ProductsState = {
	data: [],
	sorting: "none",
};

export const getProductsAsync = createAsyncThunk(
	"products/fetchProducts",
	async () => {
		const products: Product[] = await firestoreService.getProducts();
		return products;
	}
);

export const productsSlice = createSlice({
	name: "products",
	initialState,
	reducers: {
		setSortingValue: (store, action: PayloadAction<SortingType>) => {
			store.sorting = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProductsAsync.fulfilled, (state, action) => {
				state.data = action.payload;
			})
			.addCase(getProductsAsync.rejected, (state) => {
				state.data = [];
			});
	},
});

export const { setSortingValue } = productsSlice.actions;

//! Selektory
export const selectProducts = (state: RootState): Product[] => {
	const { data, sorting } = state.product;

	if (sorting === "none") {
		return data;
	}

	return [...data].sort((a, b) => {
		const [fieldNameString, sortingDirect] = sorting.split("-");
		const fieldName = fieldNameString as keyof Product;
		const [valueA, valueB]: [number, number] =
			sortingDirect === "asc" ? [-1, 1] : [1, -1];

		// @ts-ignore
		return a[fieldName] < b[fieldName] ? valueA : valueB;
	});
};
export const selectSortingValue = (state: RootState): SortingType =>
	state.product.sorting;

export default productsSlice.reducer;
