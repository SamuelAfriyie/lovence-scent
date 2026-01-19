import { Outlet } from 'react-router-dom';
import BottomNavigationBar from './components/bottom-nav-bar';

function AppLayout() {
    return (
        <div className="min-h-screen">
            <div className='flex w-full justify-end lg:px-26 text-xs font-bold py-2 fixed top-0 z-50 bg-black'><span className='pr-2 text-white font-mono'>CALL US TODAY! (+233) 059-198-3224</span></div> {/* banner */}
            <Outlet />
            {/* The bottom navigation bar */}
            <BottomNavigationBar />
        </div>
    );
}

export default AppLayout;
