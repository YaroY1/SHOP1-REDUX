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

function App() {
	const colorMode = useAppSelector(selectAppColorMode);
	const dispatch = useAppDispatch();

	useEffect(() => {
		
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
			</div>
		</ThemeProvider>
	);
}

export default App;
