
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
            <div><Navbar></Navbar></div>
           
           <Outlet></Outlet>
           
        </div>
    );
};

export default MainLayout;