import { ThemeProvider } from "@mui/material";
import "./App.css";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import Header from "./components/header/header";
import {
	AppUser,
	selectAppColorMode,
	setUser,
	ValidUserMetadata,
} from "./slices/app.slice";
import { darkTheme, lightTheme } from "./styled/theme";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect } from "react";
import { auth } from ".";
import { authService } from "./service/auth/auth.service";
import { firestoreService } from "./service/firestore/firestore.service";
import { productsMock } from "./mocks/products.mock";
import Products from "./components/products/products";

function App() {
	const colorMode = useAppSelector(selectAppColorMode);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// zrob tu cos jak komponent bedzie sie wymontowywał
		return () => {
			authService.signOut();
		};
	}, []);

	useEffect(() => {
		onAuthStateChanged(auth, (user: User | null) => {
			console.log("Current user", user);
			let userInfo: AppUser | null = null;

			if (user) {
				userInfo = {
					uid: user.uid,
					email: user.email,
					emailVerified: user.emailVerified,
					lastLoginAt: (user.metadata as ValidUserMetadata).lastLoginAt,
				};
			}

			dispatch(setUser(userInfo));
		});
	}, []);

	return (
		<ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
			<div className="App">
				<Header />
				<Products />
				{/* <button onClick={() => {firestoreService.createMockProductData(productsMock)}} >Wygeneruj produkty</button> */}
			</div>
		</ThemeProvider>
	);
}

export default App;
