import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../Box/Box.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';


const SharedLayout = () => {
    return (
        <Box>
            <AppBar />
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </Box>)
}

export default SharedLayout;