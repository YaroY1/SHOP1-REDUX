import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { initializeApp } from "firebase/app";

const container = document.getElementById("root")!;
const root = createRoot(container);

const firebaseConfig = {
	apiKey: "AIzaSyBNF6Gfm3orVPEjKdanTddZ-GiXm_bg79c",
	authDomain: "shop-1-97889.firebaseapp.com",
	projectId: "shop-1-97889",
	storageBucket: "shop-1-97889.appspot.com",
	messagingSenderId: "557371715440",
	appId: "1:557371715440:web:1961bb3abc3556778c29b5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
