import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from '../Box/Box.styled';



const SharedLayout = () => {
    return (
        <Box>
            <AppBar />
           
                <Outlet />
          
        </Box>)
}

export default SharedLayout;