import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../Box/Box.styled';
import { Suspense } from 'react';



const SharedLayout = () => {
    return (
        <Box>
            <AppBar />
        <Suspense fallback={<div>Loading...</div>}   >
            <Outlet />
        </Suspense>  
        </Box>)
}

export default SharedLayout;