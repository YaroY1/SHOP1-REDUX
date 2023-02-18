import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import productReducer from "./../slices/products.slice";
import appReducer from "./../slices/app.slice";

export const store = configureStore({
	reducer: {
		product: productReducer,
		app: appReducer,
	},
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
