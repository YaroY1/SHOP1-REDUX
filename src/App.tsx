import { ThemeProvider } from "@mui/material";
import "./App.css";
import { useAppSelector } from "./app/hooks";
import Header from "./components/header/header";
import { selectAppColorMode } from "./slices/app.slice";
import { darkTheme, lightTheme } from "./styled/theme";

function App() {
	const colorMode = useAppSelector(selectAppColorMode);
	return (
		<ThemeProvider theme={colorMode === "light" ? lightTheme : darkTheme}>
			<div className="App">
				<Header />
			</div>
		</ThemeProvider>
	);
}

export default App;
