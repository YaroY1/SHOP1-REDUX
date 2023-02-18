import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ColorMode, selectAppColorMode, setAppColorMode } from '../../slices/app.slice';

const Header: React.FC = () => {
    const dispatch = useAppDispatch();
    const colorMode = useAppSelector(selectAppColorMode)

    const handleAppColorModeChange = () => {
        const newColorMode: ColorMode =  colorMode === 'light' ? 'dark' : 'light'
        dispatch(setAppColorMode(newColorMode))
    }

    return <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                    <Box>
                        <IconButton
                            size='large'
                            color='inherit'
                            onClick={handleAppColorModeChange}
                        >
                           {colorMode === 'dark' ?  <DarkModeIcon/> : <LightModeIcon />}
                        </IconButton>
                    </Box>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    </>
}

export default Header