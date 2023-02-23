import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
	ColorMode,
	selectAppColorMode,
	selectIsUserLogged,
	setAppColorMode,
} from "../../slices/app.slice";
import { authService } from "../../service/auth/auth.service";
import { useState } from "react";
import UserInfo from "./user-info/user-info";
import { Badge } from "@mui/material";

const Header: React.FC = () => {
	const dispatch = useAppDispatch();
	const colorMode = useAppSelector(selectAppColorMode);
	const isUserLogged = useAppSelector(selectIsUserLogged);

	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	const handleAppColorModeChange = () => {
		const newColorMode: ColorMode = colorMode === "light" ? "dark" : "light";
		dispatch(setAppColorMode(newColorMode));
	};

	const logMockUser = () => {
		authService.signIn("grzegorzkikut@test.pl", "123456");
	};

	return (
		<>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="static">
					<Toolbar>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
							News
						</Typography>
						<Box>
							<IconButton
								size="large"
								color="inherit"
								onClick={handleAppColorModeChange}>
								{colorMode === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
							</IconButton>
						</Box>
						{isUserLogged ? (
							<>
								<Box>
									<IconButton size="large" color="inherit">
										<Badge badgeContent={5} color="warning">
											<ShoppingCartIcon />
										</Badge>
									</IconButton>
									<IconButton
										size="large"
										color="inherit"
										onClick={handleClick}>
										<AccountCircleIcon />
									</IconButton>
								</Box>
								<UserInfo
									open={open}
									handleClose={handleClose}
									anchorEl={anchorEl}
								/>
							</>
						) : (
							<Button color="inherit" onClick={logMockUser}>
								Login
							</Button>
						)}
					</Toolbar>
				</AppBar>
			</Box>
		</>
	);
};

export default Header;
