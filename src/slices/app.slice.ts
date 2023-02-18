import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../app/store";

export type ColorMode = "light" | "dark";

export interface AppUser {
	uid: string;
	email: string;
}

export interface AppState {
	user: AppUser | null;
	colorMode: ColorMode;
}

const initialState: AppState = {
	user: null,
	colorMode: "light",
};

export const appSlice = createSlice({
	name: "app",
	initialState,
	reducers: {
		setUser: (state, action: PayloadAction<AppUser | null>) => {
			state.user = action.payload;
		},
		setAppColorMode: (state, action: PayloadAction<ColorMode>) => {
			state.colorMode = action.payload;
		},
	},
});

//! Akcje
export const { setAppColorMode, setUser } = appSlice.actions;

//! Selektory
export const selectUser = (state: RootState): AppUser | null => state.app.user;
export const selectAppColorMode = (state: RootState): ColorMode =>
	state.app.colorMode;

export default appSlice.reducer;
