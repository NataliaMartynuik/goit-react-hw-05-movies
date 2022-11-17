import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../Box/Box.styled';
import { Suspense } from 'react';


export const Layout = () => {
    return (
        <Box>
            <AppBar />
            <Suspense fallback="">
                <Outlet />
            </Suspense>
        </Box>)
}