import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserMetadata } from "firebase/auth";
import { RootState, AppThunk } from "../app/store";

export type ColorMode = "light" | "dark";

export interface ValidUserMetadata extends UserMetadata {
	createdAt: string;
	lastLoginAt: string;
}

export interface AppUser {
	uid: string;
	email: string | null;
	emailVerified: boolean;
	lastLoginAt: string;
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
export const selectIsUserLogged = (state: RootState): boolean =>
	Boolean(state.app.user);
export const selectAppColorMode = (state: RootState): ColorMode =>
	state.app.colorMode;

export default appSlice.reducer;
